import Typewriter from "typewriter-effect";
import { useGlobalState } from "../../redux/functions";
import { ThemeColorController } from "../../controllers/ThemeColor.controller";
import { memo } from "react";

type TAboutTypeWriter = {
  text: string;
  finishHandler?: () => void;
};

const PagesTitleTypeWriter = memo(({
  text,
  finishHandler = () => {},
}: TAboutTypeWriter) => {
  const currentTheme = useGlobalState("theme");
  const { textColor } = new ThemeColorController(currentTheme as TTheme)
    .getThemeColor;
  return (
    <>
      <div
        className={`${textColor} font-extrabold font-serif text-6xl max-[350px]:text-4xl cursor-default`}
      >
        <Typewriter
          options={{
            delay: 200,
            deleteSpeed: 50,
          }}
          onInit={(coder) => {
            coder.typeString(text).callFunction(finishHandler).start();
          }}
        />
      </div>
    </>
  );
});

export default PagesTitleTypeWriter;
