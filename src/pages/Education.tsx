import { useState } from "react";
import EducationTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import { useGlobalState } from "../redux/functions";
import { ThemeColorController } from "../controllers/ThemeColor.controller";
import EducationTimeline from "../components/timeline/Education.timeline";
import Footer from "../components/footer";

const Education = () => {
  const theme = useGlobalState("theme");
  const style = new ThemeColorController(theme as TTheme).getThemeColor;
  const [isTyping, setIsTyping] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const finishTyping = () => {
    setIsTyping(false);
  };

  return (
    <>
      <div className="mt-48 overflow-x-hidden">
        <div id="title" className="w-full flex absolute justify-center">
          <div className="absolute container items-center justify-center flex">
            <EducationTypeWriter
              text={"Education"}
              finishHandler={finishTyping}
            />
          </div>
        </div>
        {!isTyping && (
          <div
            id="app"
            className={`absolute mt-[4.5rem] w-full px-3 pb-32 animate-fade cursor-default text-center`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <p
              className={`flex text-xs tracking-tighter font-thin justify-center ${style.descriptionTextColor}`}
            >
              "Education is one thing no one can take away from you.” —- Elin
              Nordegren
            </p>
            <div className="mt-10 mb-20 flex justify-center">
              <p
                className={`w-[55%] text-base font-medium ${style.descriptionTextColor}`}
              >
                My educational journey has been a transformative experience,
                marked by{" "}
                <strong
                  className={isHover ? "text-orange-400" : style.textColor}
                >
                  discipline
                </strong>{" "}
                &{" "}
                <strong
                  className={isHover ? "text-orange-400" : style.textColor}
                >
                  personal growth
                </strong>
                , embraced rigorous study routines, hands-on projects, and
                self-learning opportunities beyond the classroom.
              </p>
            </div>

            <div className="flex justify-center">
              <EducationTimeline style={style} />
            </div>
            {<Footer theme={theme} />}
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
