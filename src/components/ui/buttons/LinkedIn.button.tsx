import { MY_LINKEDIN_URL } from "../../../utils/constants";
import { DEFAULT_ICON_SIZE, LinkedIn } from "../react-icons";
import { Link, LinkProps } from "react-router-dom";

const LinkedInButton = ({
  size = DEFAULT_ICON_SIZE,
  ...rest
}: TButton & Omit<LinkProps, "to">) => {
  return (
    <>
      <Link
        to={MY_LINKEDIN_URL}
        className="hover:text-orange-400 bg-transparent flex justify-center items-center"
        title="LinkedIn"
        {...rest}
      >
        <LinkedIn size={size} />
      </Link>
    </>
  );
};

export default LinkedInButton;
