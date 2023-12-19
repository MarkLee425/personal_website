import { ThemeColorController } from "../../controllers/ThemeColor.controller";
import { checkState } from "../../redux/functions";
import { INITIATION } from "../../constants";

const Footer = () => {
  const currentTheme = checkState("theme");
  const { textColor } = new ThemeColorController(currentTheme as TTheme)
    .getThemeColor;
  return (
    <>
      <div
        className={`left-3 z-30 fixed ${textColor} inset-x-0 bottom-1 font-extralight text-left text-xs flex flex-wrap hover:cursor-default`}
      >
        <p className="block-left text-gray-400">{INITIATION.copyright}</p>
      </div>
      <div
        className={`z-30 fixed ${textColor} inset-x-0 bottom-1 font-extralight text-left text-xs flex flex-wrap hover:cursor-default justify-center`}
      >
        <p className="block-right text-center text-gray-400">
          {INITIATION.websiteWithHeart}
        </p>
      </div>
    </>
  );
};

export default Footer;
