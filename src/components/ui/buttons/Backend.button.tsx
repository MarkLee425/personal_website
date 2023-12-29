import { Backend, DEFAULT_ICON_SIZE } from "../react-icons";
import { Link, LinkProps } from "react-router-dom";

const BackendButton = ({
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
        <Backend size={size} />
        <p className="text-sm">Backend</p>
      </Link>
    </>
  );
};

export default BackendButton;
