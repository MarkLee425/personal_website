import { MY_GITLAB_URL } from "../../../utils/constants";
import { DEFAULT_ICON_SIZE, GitLab } from "../react-icons";
import { Link, LinkProps } from "react-router-dom";

const GitLabButton = ({
  size = DEFAULT_ICON_SIZE,
  ...rest
}: TButton & Omit<LinkProps, "to">) => {
  return (
    <>
      <Link
        to={MY_GITLAB_URL}
        className="hover:text-orange-400 bg-transparent flex justify-center items-center"
        title="GitLab"
        {...rest}
      >
        <GitLab size={size} />
      </Link>
    </>
  );
};

export default GitLabButton;
