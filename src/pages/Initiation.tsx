import Typewriter from "typewriter-effect";
import { INITIATION } from "../constants";
import { checkState } from "../redux/functions";
import { ThemeColorController } from "../controllers/ThemeColor.controller";

type TInitiation = {
  finishHandler?: () => void;
};

const Initiation = ({ finishHandler = () => {} }: TInitiation) => {
  const currentTheme = checkState("theme");
  const { initiationTextColor } = new ThemeColorController(
    currentTheme as TTheme
  ).getThemeColor;
  return (
    <>
      <div className={`${initiationTextColor}`}>
        <Typewriter
          options={{
            delay: 80,
            loop: true,
          }}
          onInit={(coder) => {
            coder
              .typeString(INITIATION.position[0])
              .pauseFor(500)
              .deleteAll(50)
              .typeString(INITIATION.position[1])
              .pauseFor(500)
              .deleteAll(50)
              .typeString(INITIATION.position[2])
              .pauseFor(500)
              .callFunction(finishHandler)
              .start();
          }}
        />
      </div>
    </>
  );
};

export default Initiation;
