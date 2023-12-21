import { useState } from "react";
import ExperienceTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import Footer from "../components/footer";
import { useGlobalState } from "../redux/functions";
import { ThemeColorController } from "../controllers/ThemeColor.controller";
import ExperienceTimeline from "../components/timeline/Experience.timeline";

const Experience = () => {
  const theme = useGlobalState("theme");
  const style = new ThemeColorController(theme as TTheme).getThemeColor;
  const [isTyping, setIsTyping] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const finishTyping = () => setIsTyping(false);

  return (
    <>
      <div className="mt-48 overflow-x-hidden">
        <div id="title" className="w-full flex absolute justify-center">
          <div className="absolute container items-center justify-center flex">
            <ExperienceTypeWriter
              text={"Experience"}
              finishHandler={finishTyping}
            />
          </div>
        </div>
        {!isTyping && (
          <div
            id="app"
            className={`absolute mt-[4.5rem] w-full px-3 pb-32 animate-fade cursor-default`}
          >
            <p
              className={`flex text-xs tracking-tighter font-thin justify-center ${style.descriptionTextColor}`}
            >
              'You cannot create experience. You must undergo it.' -- Albert
              Camus
            </p>
            <div
              className="mt-10 mb-20 flex justify-center"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <p
                className={`w-[55%] text-center text-base font-medium ${style.descriptionTextColor}`}
              >
                With the variety of experience being a skilled software
                engineer, I am dedicated to creating{" "}
                <strong
                  className={isHover ? "text-orange-400" : style.textColor}
                >
                  robust
                </strong>{" "}
                and{" "}
                <strong
                  className={isHover ? "text-orange-400" : style.textColor}
                >
                  efficient
                </strong>{" "}
                solutions, and also obsessed with{" "}
                <strong
                  className={isHover ? "text-orange-400" : style.textColor}
                >
                  elegant coding style
                </strong>{" "}
                & ready to contribute on more projects and to IT community.
              </p>
            </div>

            <div className="flex justify-center">
              <ExperienceTimeline style={style} />
            </div>
            <Footer theme={theme} />
          </div>
        )}
      </div>
    </>
  );
};

export default Experience;
