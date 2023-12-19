import { ThemeColorController } from "../../controllers/ThemeColor.controller";
import { INITIATION } from "../../constants";

type TFooter = {
  theme: TTheme;
};

const Footer = ({ theme }: TFooter) => {
  const { textColor } = new ThemeColorController(theme as TTheme).getThemeColor;
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
