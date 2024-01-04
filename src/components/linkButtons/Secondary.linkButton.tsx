import { Link, LinkProps, To } from "react-router-dom";
import { ReactNode, memo } from "react";
import { useTheme } from "../../hooks";

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
          className={`border-[1px] border-gray w-fit rounded-md px-2.5 py-1 text-sm ${style.bgColor.buttons.secondary.primary} font-normal tracking-wider flex items-center align-middle ${style.bgColor.buttons.secondary.hover}`}
        >
          {element?.text && (
            <p className={`${style.textColor.primary}`}>{element.text}</p>
          )}
          {element?.icon && (
            <div className={`${style.textColor.primary} ml-1`}>
              {element.icon}
            </div>
          )}
        </Link>
      </>
    );
  },
);

export default SecondaryLinkButton;
