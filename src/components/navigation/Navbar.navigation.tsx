"use client";

import { Link } from "react-router-dom";
import ThemeToggleButton from "../buttons/ThemeToggle.button";
import { Smile, ThreeDots } from "../react-icons";
import { checkState } from "../../redux/functions";
import { ThemeColorController } from "../../controllers/ThemeColor.controller";
import LinkedInButton from "../buttons/LinkedIn.button";
import GitLabButton from "../buttons/GitLab.button";
import GitHubButton from "../buttons/Github.button";
import ThreeDotsButton from "../buttons/ThreeDots.button";

function Navbar() {
  const currentTheme = checkState("theme");
  const { navigationBorderColor } = new ThemeColorController(
    currentTheme as TTheme
  ).getThemeColor;

  const iconOnClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  const buttonClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className={`flex ${navigationBorderColor} border-b-[0.5px] w-full z-30 py-3 px-5 gap-x-8 items-center font-semibold text-sm leading-6`}
      >
        {/* ICON */}
        <Link
          to={"/"}
          id="face_ico"
          className="hover:cursor-pointer hover:text-orange-400 border-solid border-2"
        >
          {/* TODO: change the icon */}
          <Smile size={20} />
        </Link>
        {/* CENTERED CONTAINER */}
        <div className="fixed px-5 items-center text-center hidden lg:flex lg:fixed lg:right-3 w-fit divide-x-2 justify-center align-middle tracking-normal">
          <div>
            <Link to={"/about"} className="px-3 hover:text-orange-400">
              About Me
            </Link>
            <Link to={"/history"} className="px-3 hover:text-orange-400">
              Employment History
            </Link>
            <Link to={"/education"} className="px-3 hover:text-orange-400">
              Education
            </Link>
            <Link to={"/skills"} className="px-3 hover:text-orange-400">
              Skillsets
            </Link>
            <Link to={"/contact"} className="px-3 hover:text-orange-400">
              Contact
            </Link>
          </div>
          <div className="ml-10 flex space-x-3 align-middle">
            <ThemeToggleButton />
            <LinkedInButton />
            <GitHubButton />
            <GitLabButton />
          </div>
        </div>
        <div className="fixed lg:hidden right-3">
            <ThreeDotsButton clickHandler={buttonClickHandler}/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
