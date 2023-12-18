import { MY_GITHUB_URL } from "../../constants/url";
import { DEFAULT_ICON_SIZE, GitHub } from "../react-icons";
import { Link } from "react-router-dom";

const GitHubButton = () => {
  return (
    <>
      <Link
        to={MY_GITHUB_URL}
        className="hover:text-orange-400 bg-transparent flex justify-center items-center"
      >
        <GitHub size={DEFAULT_ICON_SIZE} />
      </Link>
    </>
  );
};

export default GitHubButton;
