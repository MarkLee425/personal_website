import { Link, LinkProps, To } from "react-router-dom";
import { ReactNode, memo } from "react";
import { useTheme } from "../../hooks";

type TElement = {
  text?: string;
  icon?: ReactNode;
};

type TPrimaryLinkButton = {
  to: To;
  description?: string;
  element: TElement;
};

const PrimaryLinkButton = memo((props: TPrimaryLinkButton & LinkProps) => {
  const { to, description, element, ...rest } = props;
  const { style } = useTheme();
  return (
    <>
      <Link
        to={to}
        aria-describedby={description && description}
        className={`rounded-md px-3 py-1.5 text-sm w-fit flex items-center align-middle ${style.primaryButtonBgColor} ${style.primaryButtonTextColor} font-normal tracking-wider ${style.hoverPrimaryButtonBgColor} hover:ease-in hover:duration-75`}
        {...rest}
      >
        {element?.text && <p>{element.text}</p>}
        {element?.icon && <div className="ml-1">{element.icon}</div>}
      </Link>
    </>
  );
});

export default PrimaryLinkButton;
