import { DEFAULT_ICON_SIZE, Email } from "../react-icons";
import { Link, LinkProps } from "react-router-dom";

const GitHubButton = ({
  size = DEFAULT_ICON_SIZE,
  ...rest
}: TButton & Omit<LinkProps, "to">) => {
  return (
    <>
      <Link
        to={"mailto:leehokwong0425@protonmail.com"}
        className="hover:text-orange-400 bg-transparent flex justify-center items-center"
        title="Email"
        {...rest}
      >
        <Email size={size} />
      </Link>
    </>
  );
};

export default GitHubButton;
