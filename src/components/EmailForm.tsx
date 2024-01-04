import { useTheme } from "../hooks";
import { context } from "../utils/constants";
import LoadingIcon from "./LoadingIcon";
import { Chat, DEFAULT_ICON_SIZE, Send } from "./ui/react-icons";

type TEmailFormProps = {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onChangeHandler: (
    dataParam: "email" | "subject" | "content",
  ) => (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  isLoading: boolean;
};

const CustomInput = ({
  type,
  placeholder,
  onChange,
}: {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <input
    className="w-full border border-gray-400 rounded-lg bg-transparent py-2 px-4 outline-none focus:border-2 focus:border-purple-400 transition-none"
    placeholder={placeholder}
    required={true}
    type={type}
    onChange={onChange}
  />
);

const EmailForm = ({
  submitHandler,
  onChangeHandler,
  isLoading,
}: TEmailFormProps) => {
  const { style } = useTheme();
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center text-center align-middle justify-items-center gap-x-4 py-10 font-mono tracking-wide">
          <h1
            className={`${style.textColor.primary} text-3xl ${style.textColor.orange}`}
          >
            {context.emailTitle as string}
          </h1>
          <Chat size={DEFAULT_ICON_SIZE} />
        </div>

        <div className="w-[90%] translate-x-[5%] mb-2 flex-col flex">
          <CustomInput
            type="email"
            placeholder="Your email"
            onChange={onChangeHandler("email")}
          />
        </div>
        <div className="w-[90%] translate-x-[5%] mb-2">
          <CustomInput
            type="text"
            placeholder="Subject"
            onChange={onChangeHandler("subject")}
          />
        </div>
        <div className="w-[90%] translate-x-[5%] mb-2">
          <textarea
            className="w-full border border-gray-400 rounded-lg bg-transparent py-2 px-4 outline-none focus:border-2 focus:border-purple-400 transition-none"
            placeholder="Content"
            required={true}
            rows={10}
            maxLength={500}
            onChange={onChangeHandler("content")}
          />
        </div>
        <div className="w-full h-fit flex items-center align-middle justify-center mb-3">
          {!isLoading ? (
            <button
              type="submit"
              className={`flex justify-center items-center ${style.bgColor.buttons.tertiary.hover} ${style.bgColor.buttons.tertiary.primary} text-white py-2 px-4 rounded-md w-fit text-sm font-normal tracking-wider hover:ease-in hover:duration-75`}
            >
              <p>{context.emailSend as string}</p>
              <Send className="ml-2" />
            </button>
          ) : (
            <button
              disabled={true}
              type="button"
              className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
            >
              <LoadingIcon />
              Loading...
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default EmailForm;
