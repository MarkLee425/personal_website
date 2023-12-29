import { DEFAULT_ICON_SIZE, Database } from "../react-icons";
import { Link, LinkProps } from "react-router-dom";

const DatabaseButton = ({
  size = DEFAULT_ICON_SIZE,
  ...rest
}: TButton & Omit<LinkProps, "to">) => {
  return (
    <>
      <Link
        to={"/skills"}
        className="hover:text-orange-400 bg-transparent flex flex-col justify-center items-center"
        title="Database"
        {...rest}
      >
        <Database size={size} />
        <p className="text-sm">Database</p>
      </Link>
    </>
  );
};

export default DatabaseButton;
