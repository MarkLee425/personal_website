import { useCallback, useState } from "react";
import ContactTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import { useGlobalState, useTheme } from "../hooks";
import axios, { AxiosError } from "axios";
import { render } from "@react-email/render";
import { EmailTemplate } from "../components/EmailTemplate";
import isDev from "../utils/envResolver";
import ContactResponsePage from "../components/ContactResponsePage";
import { useAppDispatch as useDispatch } from "../redux/hooks";
import { decrement } from "../redux/slices";
import EmailForm from "../components/EmailForm";
import { context } from "../utils/constants";

const Contact = () => {
  const { style } = useTheme();
  const [isTyping, setIsTyping] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<number | null>(null);
  const finishTyping = useCallback(() => setIsTyping(false), [setIsTyping]);
  const emailCounter = useGlobalState("counter");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    content: "",
  });

  const submitFormHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const getToken = async () => {
      try {
        const {
          data: { accessToken, error },
          status,
        } = await axios.get(
          isDev()
            ? context.BACKEND_LOCAL_URL + "/getAccessToken"
            : import.meta.env.VITE_BACKEND_PATH + "/api/getAccessToken",
          {
            headers: {
              Authorization: import.meta.env.VITE_API_TOKEN,
            },
          },
        );
        if (status === 400 || status === 401) return { error, status };

        return { accessToken, status };
      } catch (error) {
        setIsLoading(false);
        setError((error as AxiosError).response?.status as number);
        return {
          status: (error as AxiosError).response?.status as number,
          error: (error as AxiosError).message,
        };
      }
    };
    const { accessToken, error, status } = await getToken();
    if (status === 401) {
      setIsLoading(false);
      setError(401);
      return;
    }
    if (!accessToken || !status || error) {
      setIsLoading(false);
      setError(500);
      return;
    }

    const html = render(
      <EmailTemplate
        email={formData.email}
        content={"[Career] " + formData.content}
        key={"email template"}
      />,
      {
        pretty: true,
      },
    );

    const sendEmail = async () => {
      if (emailCounter === 0) return;
      try {
        const data = await axios.post(
          isDev()
            ? context.BACKEND_LOCAL_URL + "/send-email"
            : import.meta.env.VITE_BACKEND_PATH + "/api/send-email",
          {
            from: formData.email,
            subject: formData.subject,
            html: html,
          },
          {
            headers: {
              Authorization: accessToken,
              "Content-Type": "application/json",
            },
          },
        );
        setIsLoading(false);
        setIsSuccess(true);
        dispatch(decrement());
        return data;
      } catch (error) {
        if (
          (error as AxiosError).status === 400 ||
          (error as AxiosError).response?.status === 500 ||
          (error as AxiosError).response?.status === 406
        ) {
          setError((error as AxiosError).response?.status ?? 500);
        } else {
          setError(500);
        }
        setIsLoading(false);
        return;
      }
    };
    await sendEmail();
  };

  const emailOnChangeHandler =
    (dataParam: "email" | "subject" | "content") =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      setFormData({
        ...formData,
        [dataParam]: e.target.value,
      });
    };

  return (
    <>
      <div className="mt-24 overflow-x-hidden text-center overflow-y-hidden">
        <div id="title" className="w-full flex absolute mt-24 justify-center">
          <div className="absolute container items-center justify-center flex">
            <ContactTypeWriter
              text={context.contactTypeWriter as string}
              finishHandler={finishTyping}
            />
          </div>
        </div>
        {!isTyping && (
          <div
            id="app"
            className={`absolute mt-[4.5rem] w-full px-3 animate-fade cursor-default`}
          >
            <div className="mt-24 flex flex-col justify-center max-[225px]:mt-36 pb-28 ">
              <p className={`${style.textColor.tertiary}`}>
                {context.contactTitle as string}
              </p>

              {isSuccess ? (
                <ContactResponsePage isSuccess={true} />
              ) : error ? (
                <ContactResponsePage errorCode={error} />
              ) : emailCounter === 0 ? (
                <ContactResponsePage errorCode={406} />
              ) : (
                <div className="flex flex-row px-4">
                  <div
                    className={`flex flex-col w-[40%] translate-x-[5%] justify-center text-left py-8 pl-4 ${style.textColor.orange.primary} text-5xl max-[800px]:hidden`}
                  >
                    <h1
                      className={`ml-8 max-w-[700px] font-bold tracking-wider mb-8`}
                    >
                      {context.contactQuestion as string}
                    </h1>
                    <h1
                      className={`ml-8 max-w-[700px] font-bold tracking-wider`}
                    >
                      {context.contactAnswer as string}
                    </h1>
                    <div
                      className={`text-sm ${style.textColor.primary} mt-16 text-center`}
                    >
                      <p>
                        {(context.contactToken as string) +
                          (emailCounter as number)}
                      </p>
                    </div>
                  </div>
                  <div className="border-2 rounded-2xl flex flex-col w-[35%] mt-12 translate-x-[30%] justify-center shadow-lg border-purple-500  shadow-purple-500 max-[800px]:w-[100%] max-[800px]:translate-x-0">
                    <EmailForm
                      submitHandler={submitFormHandler}
                      onChangeHandler={emailOnChangeHandler}
                      isLoading={isLoading}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
