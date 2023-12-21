import { memo } from "react";
import { ThemeColorController } from "../../controllers/ThemeColor.controller";
import { context } from "../../utils/constants";

type TFooter = {
  theme: TTheme;
};

const Footer = memo(({ theme }: TFooter) => {
  const { textColor } = new ThemeColorController(theme as TTheme).getThemeColor;
  return (
    <>
      <div className="z-30 font-extralight text-left text-xs hover:cursor-default max-[1200px]:hidden">
        <div
          className={`left-3 absolute ${textColor} bottom-1 flex flex-wrap `}
        >
          <p className="block-left text-gray-400">{context.copyright}</p>
        </div>
        <div
          className={`absolute ${textColor} inset-x-0 bottom-1 flex flex-wrap justify-center`}
        >
          <p className="block-right text-center text-gray-400">
            {context.websiteWithHeart}
          </p>
        </div>
      </div>
    </>
  );
});

export default Footer;
