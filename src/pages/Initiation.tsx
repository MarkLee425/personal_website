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
            delay: 50,
            deleteSpeed: 50,
            loop: true,
          }}
          onInit={(coder) => {
            coder
              .typeString(INITIATION.position[0])
              .pauseFor(300)
              .deleteAll()
              .typeString(INITIATION.position[1])
              .pauseFor(300)
              .deleteAll()
              .typeString(INITIATION.position[2])
              .pauseFor(300)
              .deleteAll()
              .typeString(INITIATION.position[3])
              .pauseFor(300)
              .callFunction(finishHandler)
              .start();
          }}
        />
      </div>
    </>
  );
};

export default Initiation;
