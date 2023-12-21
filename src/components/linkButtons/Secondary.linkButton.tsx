import { Link, LinkProps, To } from "react-router-dom";
import { TThemeProps } from "../../controllers/ThemeColor.controller";
import { ReactNode, memo } from "react";

type TElement = {
  text?: string;
  icon?: ReactNode;
};

type TSecondaryLinkButton = {
  style: TThemeProps;
  to: To;
  description?: string;
  element: TElement;
};

const SecondaryLinkButton = memo(({
  style,
  to,
  description,
  element,
  ...rest
}: TSecondaryLinkButton & LinkProps) => {
  return (
    <>
      <Link
        {...rest}
        to={to}
        aria-describedby={description}
        className={`border-[1px] border-gray w-fit rounded-md px-3 py-1.5 text-sm ${style.secondaryButtonBgColor} ${style.secondaryButtonBgColor} font-normal tracking-wider flex items-center align-middle ${style.hoverSecondaryButtonBgColor}`}
      >
        {element?.text && <p>{element.text}</p>}
        {element?.icon && <div className="ml-1">{element.icon}</div>}
      </Link>
    </>
  );
});

export default SecondaryLinkButton;
