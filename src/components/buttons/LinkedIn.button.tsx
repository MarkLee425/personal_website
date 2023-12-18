import { MY_LINKEDIN_URL } from "../../constants/url";
import { DEFAULT_ICON_SIZE, LinkedIn } from "../react-icons";
import { Link } from "react-router-dom";

const LinkedInButton = () => {
  return (
    <>
      <Link
        to={MY_LINKEDIN_URL}
        className="hover:text-orange-400 bg-transparent flex justify-center items-center"
      >
        <LinkedIn size={DEFAULT_ICON_SIZE} />
      </Link>
    </>
  );
};

export default LinkedInButton;
