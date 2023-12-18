import { MY_GITLAB_URL } from "../../constants/url";
import { DEFAULT_ICON_SIZE, GitLab } from "../react-icons";
import { Link } from "react-router-dom";

const GitLabButton = () => {
  return (
    <>
      <Link
        to={MY_GITLAB_URL}
        className="hover:text-orange-400 bg-transparent flex justify-center items-center"
      >
        <GitLab size={DEFAULT_ICON_SIZE} />
      </Link>
    </>
  );
};

export default GitLabButton;
