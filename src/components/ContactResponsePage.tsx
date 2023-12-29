import { MY_LINKEDIN_URL } from "../utils/constants";
import LinkedInButton from "./ui/buttons/LinkedIn.button";

type ContactResponsePageProps = {
  isSuccess?: boolean;
  errorCode?: number;
};

const ContactResponsePage = ({
  isSuccess,
  errorCode,
}: ContactResponsePageProps) => {
  return (
    <div className="mt-12 items-center align-middle text-center w-[90%] flex justify-center translate-x-[5%] py-40">
      <div className="flex flex-col align-middle text-center justify-center">
        {isSuccess ? (
          <div>
            <h1 className="text-2xl text-center tracking-normal">
              The email has been successfully sent.{" "}
            </h1>
            <h1 className="text-2xl text-center tracking-normal mb-16">
              Will reply to you as soon as possible :)
            </h1>
            <h1 className="text-4xl tracking-normal">
              <strong className="text-orange-400">Thank you</strong> for
              reaching me.{" "}
              <strong className="text-orange-400">Have a good day.</strong>
            </h1>
          </div>
        ) : (
          <>
            {errorCode === 400 ? (
              <>
                <h1 className="text-3xl tracking-normal">Bad Request~~</h1>
                <h1 className="text-3xl tracking-normal">
                  Please make sure you have include the 'email', 'subject' and
                  'content' in the email.
                </h1>
              </>
            ) : errorCode === 401 ? (
              <h1 className="text-3xl tracking-normal">
                Unauthorized! API Token is required.
              </h1>
            ) : errorCode === 406 ? (
              <h1 className="text-3xl tracking-normal">
                I am sorry that the daily limit of sending email has been
                exceeded :(
              </h1>
            ) : (
              <h1 className="text-3xl tracking-normal">
                Internal Server Issue :(
              </h1>
            )}

            <div className="flex items-center align-middle text-center justify-center mt-10 text-4xl">
              <h1 className="tracking-wider">
                Please also feel free to pm me through
              </h1>
              <a
                className=" ml-2 text-orange-500 hover:cursor-pointer tracking-wider"
                href={MY_LINKEDIN_URL}
              >
                LinkedIn
              </a>
              <LinkedInButton className="rounded-full hover:text-orange-500 ml-2 max-sm:hidden" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactResponsePage;
