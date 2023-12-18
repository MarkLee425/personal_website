import { Link } from "react-router-dom";
import { Cross, DEFAULT_ICON_SIZE } from "../react-icons";
import ThemeToggleButton from "../buttons/ThemeToggle.button";
import LinkedInButton from "../buttons/LinkedIn.button";
import GitHubButton from "../buttons/GitHub.button";
import GitLabButton from "../buttons/GitLab.button";
import { checkState } from "../../../redux/functions";
import { ThemeColorController } from "../../../controllers/ThemeColor.controller";

type TPopup = {
  openPopup: boolean;
  closePopup: () => void;
};

const Popup = ({ openPopup, closePopup }: TPopup) => {
  const currentTheme = checkState("theme");
  const { textColor, popupBgColor, popupTextColor } = new ThemeColorController(
    currentTheme as TTheme
  ).getThemeColor;
  const handlelosePopUp = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    closePopup();
  };

  if (openPopup !== true) return null;

  return (
    <div
      id="ModelContainer"
      className="fixed inset-0 bg-black flex bg-opacity-20 backdrop-blur-md"
    >
      <div
        className={`p-3 ${popupBgColor} w-[25rem] shadow-inner border-e-emerald-600 rounded-xl py-3 fixed right-3 top-3 ${textColor}`}
      >
        <Cross
          className="fixed right-9 top-9 z-30 hover:cursor-pointer hover:text-orange-400 font-normal"
          onClick={handlelosePopUp}
          size={DEFAULT_ICON_SIZE - 5}
        />
        <ul
          className={`w-full p-3 justify-center flex flex-col gap-y-5 ml-3 ${popupTextColor}`}
        >
          <li>
            <Link
              to={"/about"}
              className="font-medium text-lg py-3 hover:text-orange-400"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to={"/education"}
              className="font-medium text-lg py-3 hover:text-orange-400"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to={"/experience"}
              className="font-medium text-lg py-3 hover:text-orange-400"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to={"/skills"}
              className="font-medium text-lg py-3 hover:text-orange-400"
            >
              Skillsets
            </Link>
          </li>
          <li className="items-center flex">
            <Link
              to={"/contact"}
              className="font-medium text-lg hover:text-orange-400"
            >
              Contact Me
            </Link>
            <div className="fixed right-10 flex gap-x-2">
              <LinkedInButton size={20} />
              <GitHubButton size={20} />
              <GitLabButton size={20} />
            </div>
          </li>
        </ul>
        <div className="border-t-[1px] mt-3">
          <div className="flex mt-2 px-3 ml-3 items-center flex-row justify-between">
            <p className="hover:cursor-default">Switch Theme</p>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
