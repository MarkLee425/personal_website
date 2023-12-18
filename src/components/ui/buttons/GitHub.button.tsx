import { MY_GITHUB_URL } from "../../../constants";
import { DEFAULT_ICON_SIZE, GitHub } from "../react-icons";
import { Link } from "react-router-dom";

const GitHubButton = ({ size = DEFAULT_ICON_SIZE }: TButton) => {
  return (
    <>
      <Link
        to={MY_GITHUB_URL}
        className="hover:text-orange-400 bg-transparent flex justify-center items-center"
        title="GitHub"
      >
        <GitHub size={size} />
      </Link>
    </>
  );
};

export default GitHubButton;
