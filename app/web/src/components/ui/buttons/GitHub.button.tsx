import { MY_GITHUB_URL } from "../../../utils/constants";
import { DEFAULT_ICON_SIZE, GitHub } from "../react-icons";
import { Link, LinkProps } from "react-router-dom";

const GitHubButton = ({
  size = DEFAULT_ICON_SIZE,
  ...rest
}: TButton & Omit<LinkProps, "to">) => {
  return (
    <>
      <Link
        to={MY_GITHUB_URL}
        className="hover:text-orange-400 bg-transparent flex justify-center items-center"
        title="GitHub"
        {...rest}
      >
        <GitHub size={size} />
      </Link>
    </>
  );
};

export default GitHubButton;
