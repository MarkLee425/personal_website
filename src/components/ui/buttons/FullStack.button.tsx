import { DEFAULT_ICON_SIZE, FullStack } from "../react-icons";
import { Link, LinkProps } from "react-router-dom";

const FullStackButton = ({
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
        <FullStack size={size} />
        <p className="text-sm">Full Stack</p>
      </Link>
    </>
  );
};

export default FullStackButton;
