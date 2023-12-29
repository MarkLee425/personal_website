import { DEFAULT_ICON_SIZE, Frontend } from "../react-icons";
import { Link, LinkProps } from "react-router-dom";

const FrontendButton = ({
  size = DEFAULT_ICON_SIZE,
  ...rest
}: TButton & Omit<LinkProps, "to">) => {
  return (
    <>
      <Link
        to={"/skills"}
        className="hover:text-orange-400 bg-transparent flex flex-col justify-center items-center"
        title="Frontend"
        {...rest}
      >
        <Frontend size={size} />
        <p className="text-sm">Frontend</p>
      </Link>
    </>
  );
};

export default FrontendButton;
