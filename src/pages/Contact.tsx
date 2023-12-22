import { useState } from "react";
import ContactTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import Footer from "../components/footer";
import { useGlobalState } from "../redux/functions";
import { ThemeColorController } from "../controllers/ThemeColor.controller";
import LinkedInButton from "../components/ui/buttons/LinkedIn.button";
import { MY_LINKEDIN_URL } from "../utils/constants";

const Contact = () => {
  const theme = useGlobalState("theme");
  const style = new ThemeColorController(theme).getThemeColor;
  const [isTyping, setIsTyping] = useState(true);
  const finishTyping = () => setIsTyping(false);

  return (
    <>
      <div className="mt-48 overflow-x-hidden">
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
            <div className="mt-24 mb-20 flex justify-center">
              <p className={`${style.descriptionTextColor}`}>
                Feel free to reach me for any great opportunities!
              </p>
              <div className="absolute mt-12 items-center align-middle text-center">
                <div className="flex align-middle text-center justify-center mt-32">
                  <h1 className="text-xl tracking-wider">Thank you for your time! Please pm me through <a className="text-orange-500 hover:cursor-pointer" href={MY_LINKEDIN_URL}>LinkedIn</a></h1>
                  <LinkedInButton className="rounded-full hover:text-orange-500 ml-3" />
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer theme={theme} />
      </div>
    </>
  );
};

export default Contact;
