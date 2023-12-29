import { useCallback, useState } from "react";
import ExperienceTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import Footer from "../components/footer";
import ExperienceTimeline from "../components/timeline/Experience.timeline";
import { QUOTES } from "../utils/constants";
import { useTheme } from "../hooks";

const Experience = () => {
  const { style } = useTheme();
  const [isTyping, setIsTyping] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const finishTyping = useCallback(() => setIsTyping(false), [setIsTyping]);

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
              {QUOTES.experience}
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
                  className={`${
                    isHover ? "text-orange-400" : style.textColor
                  } max-[1350px]:text-orange-400`}
                >
                  robust
                </strong>{" "}
                and{" "}
                <strong
                  className={`${
                    isHover ? "text-orange-400" : style.textColor
                  } max-[1350px]:text-orange-400`}
                >
                  efficient
                </strong>{" "}
                solutions, and also obsessed with{" "}
                <strong
                  className={`${
                    isHover ? "text-orange-400" : style.textColor
                  } max-[1350px]:text-orange-400`}
                >
                  elegant coding style
                </strong>{" "}
                & ready to contribute on more projects and to IT community.
              </p>
            </div>

            <div className="flex justify-center">
              <ExperienceTimeline />
            </div>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default Experience;
