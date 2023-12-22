import { useCallback, useState } from "react";
import SkillTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import Footer from "../components/footer";
import { skills } from "../utils/constants";
import CategoriesButton from "../components/ui/buttons/Categories.button";
import { useTheme } from "../Root";

const Skill = () => {
  const { style } = useTheme();
  const [isTyping, setIsTyping] = useState(true);
  const finishTyping = useCallback(() => {
    setIsTyping(false);
    console.log("setting");
  }, [setIsTyping]);

  return (
    <>
      <div className="mt-44 overflow-x-hidden">
        <div
          id="title"
          className="w-full flex absolute justify-center cursor-default"
        >
          <div className="absolute container items-center justify-center flex">
            <SkillTypeWriter text={"Skills"} finishHandler={finishTyping} />
          </div>
          {!isTyping && (
            <div className="container m-auto grid grid-cols-2 absolute mt-28 w-[50%] max-[100px]:w-[50%] max-[300px]:w-[60%] max-[650px]:w-[80%] gap-x-[5%] gap-y-8 text-center animate-fade">
              {skills.map((each) => (
                <div
                  className={`container border rounded-xl p-0.5 min-[1350px]:blur-[3px] hover:blur-none max-[1250px]:col-span-2`}
                  key={each.title as string}
                >
                  <div
                    className={`rounded-xl flex flex-wrap pt-8 items-center justify-center align-middle justify-items-center hover:text-orange-500`}
                  >
                    <h1 className="text-2xl font-bold">
                      {each.title as string}
                    </h1>
                    <div className="container flex flex-wrap justify-center gap-3 mb-8 mt-6 px-5 items-center align-middle justify-items-center">
                      {(each.skills as any[]).map((skill) => (
                        <CategoriesButton
                          key={skill.name}
                          name={skill.name}
                          icon={skill.image}
                          style={style}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Skill;
