import { useCallback, useState } from "react";
import EducationTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import EducationTimeline from "../components/timeline/Education.timeline";
import Footer from "../components/footer";
import { QUOTES } from "../utils/constants";
import { useTheme } from "../hooks";

const Education = () => {
  const { style } = useTheme();
  const [isTyping, setIsTyping] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const finishTyping = useCallback(() => setIsTyping(false), [setIsTyping]);
  
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
              {QUOTES.education}
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
              <EducationTimeline />
            </div>
            {<Footer />}
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
