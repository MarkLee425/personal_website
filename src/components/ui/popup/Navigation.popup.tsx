import { Link, To } from "react-router-dom";
import { Cross, DEFAULT_ICON_SIZE } from "../react-icons";
import ThemeToggleButton from "../buttons/ThemeToggle.button";
import LinkedInButton from "../buttons/LinkedIn.button";
import GitHubButton from "../buttons/GitHub.button";
import GitLabButton from "../buttons/GitLab.button";
import { ThemeColorController } from "../../../controllers/ThemeColor.controller";
import { Key, useEffect, useState } from "react";
import { linkRoutes } from "../../navigation/constants";
import { useGlobalState } from "../../../hooks";

type TPopup = {
  pathname: string;
  openPopup: boolean;
  closePopup: () => void;
};

const Popup = ({ pathname, openPopup, closePopup }: TPopup) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const currentTheme = useGlobalState("theme");
  const { textColor, popupBgColor, popupTextColor } = new ThemeColorController(
    currentTheme as TTheme,
  ).getThemeColor;
  const handlelosePopUp = () => {
    closePopup();
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    if (windowSize >= 1024) closePopup();
  }, [windowSize, closePopup]);

  return (
    <>
      {openPopup && (
        <div
          id="ModelContainer"
          className="z-30 fixed inset-0 bg-black flex bg-opacity-20 backdrop-blur-md"
        >
          <div
            className={`p-3 ${popupBgColor} sm:w-[25rem] xs:w-[10rem] shadow-inner border-e-emerald-600 rounded-xl py-3 fixed right-3 top-3 ${textColor}`}
          >
            <Cross
              className="fixed right-9 top-9 z-30 hover:cursor-pointer hover:text-orange-400 font-normal"
              onClick={handlelosePopUp}
              size={DEFAULT_ICON_SIZE - 5}
            />
            <ul
              className={`w-full p-3 justify-center sm:text-lg xs:text-sm flex flex-col gap-y-5 ml-3 ${popupTextColor}`}
            >
              {linkRoutes.map((each, i) => {
                return (
                  <li
                    className="items-center flex"
                    key={each.description as Key}
                  >
                    <Link
                      to={each.route as To}
                      key={each.description as Key}
                      className={`font-medium hover:text-orange-400 ${
                        pathname === each.route ? "orange-default" : textColor
                      }`}
                      onClick={() => closePopup()}
                    >
                      {each.description}
                    </Link>
                    {i === linkRoutes.length - 1 && (
                      <div className="fixed right-10 flex gap-x-2">
                        <LinkedInButton
                          size={20}
                          onClick={() => closePopup()}
                        />
                        <GitHubButton size={20} onClick={() => closePopup()} />
                        <GitLabButton size={20} onClick={() => closePopup()} />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="border-t-[1px] mt-3">
              <div className="flex px-3 pt-4 pb-2 ml-3 items-center flex-row justify-between">
                <p className="hover:cursor-default">Switch Theme</p>
                <ThemeToggleButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
