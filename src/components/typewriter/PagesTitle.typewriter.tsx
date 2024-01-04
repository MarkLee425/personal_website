import Typewriter from "typewriter-effect";
import { ThemeColorController } from "../../controllers/ThemeColor.controller";
import { memo } from "react";
import { useGlobalState } from "../../hooks";

type TAboutTypeWriter = {
  text: string;
  finishHandler?: () => void;
};

const PagesTitleTypeWriter = memo(
  ({ text, finishHandler = () => {} }: TAboutTypeWriter) => {
    const currentTheme = useGlobalState("theme");
    const style = new ThemeColorController(currentTheme as TTheme)
      .getThemeColor;
    return (
      <>
        <div
          className={`${style.textColor.primary} tracking-widest font-extrabold font-display text-6xl max-[400px]:text-4xl cursor-default`}
        >
          <Typewriter
            options={{
              delay: 150,
              deleteSpeed: 50,
            }}
            onInit={(coder) => {
              coder.typeString(text).callFunction(finishHandler).start();
            }}
          />
        </div>
      </>
    );
  },
);

export default PagesTitleTypeWriter;
