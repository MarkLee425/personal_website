"use client";

import { Link, To } from "react-router-dom";
import ThemeToggleButton from "../ui/buttons/ThemeToggle.button";
import { Smile } from "../ui/react-icons";
import { ThemeColorController } from "../../controllers/ThemeColor.controller";
import LinkedInButton from "../ui/buttons/LinkedIn.button";
import GitLabButton from "../ui/buttons/GitLab.button";
import GitHubButton from "../ui/buttons/GitHub.button";
import ThreeDotsButton from "../ui/buttons/ThreeDots.button";
import { Key, useState } from "react";
import Popup from "../ui/popup/NavigationPopup";
import { createPortal } from "react-dom";
import { linkRoutes } from "./constants";

type TNavbar = { pathname: string; theme: TTheme };

const ButtonGroup = () => (
  <div className="ml-10 flex space-x-3 align-middle">
    <ThemeToggleButton />
    <LinkedInButton />
    <GitHubButton />
    <GitLabButton />
  </div>
);

function Navbar({ pathname, theme }: TNavbar) {
  const [openPopup, setOpenPopup] = useState(false);
  const handleRemovePopUp = () => setOpenPopup(false);
  const { navigationBorderColor, navbarTextColor, navbarBgColor } =
    new ThemeColorController(theme as TTheme).getThemeColor;

  const buttonClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setOpenPopup(true);
  };

  return (
    <>
      <div
        className={`${navbarBgColor} fixed flex ${navigationBorderColor} border-b-[0.5px] w-full z-30 py-3 px-5 gap-x-8 items-center font-semibold text-sm leading-6 font-sans`}
      >
        {/* ICON */}
        <Link
          to={"/"}
          id="face_ico"
          className="hover:cursor-pointer hover:text-orange-400 border-2"
        >
          {/* TODO: change the icon */}
          <Smile size={20} />
        </Link>
        <div
          className={`fixed px-5 items-center text-center hidden lg:flex lg:fixed lg:right-3 w-fit divide-x-2 justify-center align-middle tracking-normal ${navbarTextColor} font-medium`}
        >
          {/* Navlinks */}
          <div className="navlink">
            {linkRoutes.map((each, i) => {
              // PS: i === 0 is the home page
              return i === 0 ? null : (
                <Link
                  to={each.route as To}
                  key={each.description as Key}
                  className={`${
                    pathname === each.route
                      ? "text-orange-400"
                      : navbarTextColor
                  } px-3 hover:text-orange-400`}
                  title={each.description as string}
                >
                  {each.description as string}
                </Link>
              );
            })}
          </div>
          {/* Button Groups on the Top Right corner */}
          <ButtonGroup />
        </div>
        {/* Show 3 dot button instead when screensize is too small */}
        <div className="fixed lg:hidden right-3 hover:cursor-pointer hover:text-slate-700">
          <ThreeDotsButton clickHandler={buttonClickHandler} />
        </div>
        {/* Create Portal when screensize is too small  */}
        {createPortal(
          <Popup
            pathname={pathname}
            openPopup={openPopup}
            closePopup={handleRemovePopUp}
          />,
          document.body
        )}
      </div>
    </>
  );
}

export default Navbar;
