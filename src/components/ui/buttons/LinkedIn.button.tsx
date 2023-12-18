import { MY_LINKEDIN_URL } from "../../../constants";
import { DEFAULT_ICON_SIZE, LinkedIn } from "../react-icons";
import { Link } from "react-router-dom";

const LinkedInButton = ({ size = DEFAULT_ICON_SIZE }: TButton) => {
  return (
    <>
      <Link
        to={MY_LINKEDIN_URL}
        className="hover:text-orange-400 bg-transparent flex justify-center items-center"
        title="LinkedIn"
      >
        <LinkedIn size={size} />
      </Link>
    </>
  );
};

export default LinkedInButton;
