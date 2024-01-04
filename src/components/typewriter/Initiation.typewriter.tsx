import Typewriter from "typewriter-effect";
import { context } from "../../utils/constants";
import { ThemeColorController } from "../../controllers/ThemeColor.controller";
import { memo } from "react";
import { useGlobalState } from "../../hooks";

type TInitiationTypeWriter = {
  finishHandler?: () => void;
};

const InitiationTypeWriter = memo(
  ({ finishHandler = () => {} }: TInitiationTypeWriter) => {
    const currentTheme = useGlobalState("theme");
    const style = new ThemeColorController(currentTheme as TTheme)
      .getThemeColor;
    return (
      <>
        <div
          className={`${style.textColor.orange.primary} font-display tracking-widest`}
        >
          <Typewriter
            options={{
              delay: 50,
              deleteSpeed: 50,
              loop: true,
            }}
            onInit={(coder) => {
              coder
                .typeString(context.position[0])
                .pauseFor(400)
                .deleteAll()
                .typeString(context.position[1])
                .pauseFor(400)
                .deleteAll()
                .typeString(context.position[2])
                .pauseFor(400)
                .deleteAll()
                .typeString(context.position[3])
                .pauseFor(400)
                .callFunction(finishHandler)
                .start();
            }}
          />
        </div>
      </>
    );
  },
);

export default InitiationTypeWriter;
