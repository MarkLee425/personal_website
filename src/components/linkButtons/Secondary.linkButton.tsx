import { Link, LinkProps, To } from "react-router-dom";
import { ReactNode, memo } from "react";
import { useTheme } from "../../Root";

type TElement = {
  text?: string;
  icon?: ReactNode;
};

type TSecondaryLinkButton = {
  to: To;
  description?: string;
  element: TElement;
};

const SecondaryLinkButton = memo(
  ({ to, description, element, ...rest }: TSecondaryLinkButton & LinkProps) => {
    const { style } = useTheme();
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
  }
);

export default SecondaryLinkButton;
