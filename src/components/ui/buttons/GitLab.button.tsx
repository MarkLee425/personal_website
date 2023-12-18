import { MY_GITLAB_URL } from "../../../constants";
import { DEFAULT_ICON_SIZE, GitLab } from "../react-icons";
import { Link } from "react-router-dom";

const GitLabButton = ({ size = DEFAULT_ICON_SIZE }: TButton) => {
  return (
    <>
      <Link
        to={MY_GITLAB_URL}
        className="hover:text-orange-400 bg-transparent flex justify-center items-center"
        title="GitLab"
      >
        <GitLab size={size} />
      </Link>
    </>
  );
};

export default GitLabButton;
