import { memo } from "react";
import { context } from "../../utils/constants";
import { useTheme } from "../../hooks";

const Footer = memo(({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  const { style } = useTheme();
  return (
    <>
      <div className="z-0 font-extralight text-left text-xs hover:cursor-default max-[1300px]:hidden">
        {/* <div
          className={`left-3 absolute ${style.textColor} bottom-1 flex flex-wrap`}
          {...rest}
        >
          <p className="block-left text-gray-400">{context.copyright}</p>
        </div> */}
        <div
          className={`absolute ${style.textColor} inset-x-0 bottom-1 flex flex-wrap justify-center`}
          {...rest}
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
