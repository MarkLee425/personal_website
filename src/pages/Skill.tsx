import { useState } from "react";
import SkillTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import Footer from "../components/footer";
import { useGlobalState } from "../redux/functions";

const Skill = () => {
  const theme = useGlobalState("theme");
  const [isTyping, setIsTyping] = useState(true);
  const finishTyping = () => setIsTyping(false);
  console.log(isTyping);

  return (
    <>
      <div id="title" className="w-full flex absolute mt-24 justify-center">
        <div className="absolute container items-center justify-center flex">
          <SkillTypeWriter text={"Skills"} finishHandler={finishTyping} />
        </div>
      </div>
      <Footer theme={theme} />
    </>
  );
};

export default Skill;
