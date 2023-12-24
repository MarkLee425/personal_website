import { useCallback, useState } from "react";
import SkillTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import Footer from "../components/footer";
import { QUOTES, skills } from "../utils/constants";
import CategoriesButton from "../components/ui/buttons/Categories.button";
import { useTheme } from "../hooks";

const Skill = () => {
  const { theme, style } = useTheme();
  const [isTyping, setIsTyping] = useState(true);
  const finishTyping = useCallback(() => setIsTyping(false), [setIsTyping]);

  return (
    <>
      <div className="mt-44 overflow-x-hidden flex flex-wrap">
        <div
          id="title"
          className="w-full flex absolute justify-center cursor-default"
        >
          <div className="absolute container items-center justify-center flex">
            <SkillTypeWriter text={"Skills"} finishHandler={finishTyping} />
          </div>
          {!isTyping && (
            <div className="absolute w-[50%] max-[100px]:w-[50%] max-[300px]:w-[60%] max-[650px]:w-[80%] text-center px-3 pb-32 animate-fade cursor-default">
              <p
                className={`flex text-xs tracking-tighter font-thin justify-center ${style.descriptionTextColor} mt-[4.5rem]`}
              >
                {QUOTES.skills}
              </p>
              <div className="container m-auto grid grid-cols-2 gap-x-[5%] gap-y-8 mt-16">
                {skills.map((each) => (
                  <div
                    className={`container border rounded-xl p-0.5 min-[1350px]:blur-[3px] hover:blur-none max-[1250px]:col-span-2 hover:border-purple-400 hover:shadow-lg ${
                      theme === "light"
                        ? "hover:shadow-purple-200"
                        : "hover:shadow-purple-800"
                    }`}
                    key={each.title as string}
                  >
                    <div
                      className={`rounded-xl flex flex-wrap pt-8 items-center justify-center align-middle justify-items-center hover:text-orange-500`}
                    >
                      <h1 className="text-2xl font-bold">
                        {each.title as string}
                      </h1>
                      <div className="container flex flex-wrap justify-center gap-3 mb-8 mt-6 px-5 items-center align-middle justify-items-center">
                        {(
                          each.skills as Record<string, string | JSX.Element>[]
                        ).map((skill) => (
                          <CategoriesButton
                            key={skill.name as string}
                            name={skill.name as string}
                            icon={skill.image as JSX.Element}
                            style={style}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Footer />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Skill;
