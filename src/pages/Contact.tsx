import { useState } from "react";
import ContactTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import Footer from "../components/footer";
import LinkedInButton from "../components/ui/buttons/LinkedIn.button";
import { MY_LINKEDIN_URL } from "../utils/constants";
import { useTheme } from "../Root";

const Contact = () => {
  const { style } = useTheme();
  const [isTyping, setIsTyping] = useState(true);
  const finishTyping = () => setIsTyping(false);

  return (
    <>
      <div className="mt-24 overflow-x-hidden text-center">
        <div id="title" className="w-full flex absolute mt-24 justify-center">
          <div className="absolute container items-center justify-center flex">
            <ContactTypeWriter
              text={"Contact Me"}
              finishHandler={finishTyping}
            />
          </div>
        </div>
        {!isTyping && (
          <div
            id="app"
            className={`absolute mt-[4.5rem] w-full px-3 pb-32 animate-fade cursor-default`}
          >
            <div className="mt-24 mb-20 flex justify-center max-[225px]:mt-36">
              <p className={`${style.descriptionTextColor}`}>
                Feel free to reach me for any great opportunities!
              </p>
              <div className="absolute mt-40 items-center align-middle text-center">
                <div className="flex align-middle text-center justify-center mt-32">
                  <h1 className="text-xl tracking-wider">
                    Thank you for your time! Please pm me through{" "}
                    <a
                      className="text-orange-500 hover:cursor-pointer"
                      href={MY_LINKEDIN_URL}
                    >
                      LinkedIn
                    </a>
                  </h1>
                  <LinkedInButton className="rounded-full hover:text-orange-500 ml-3 max-sm:hidden" />
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer  />
      </div>
    </>
  );
};

export default Contact;
