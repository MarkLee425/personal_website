import { INITIATION } from "../constants";
import Initiation from "./Initiation";
import { checkState } from "../redux/functions";
import { ThemeColorController } from "../controllers/ThemeColor.controller";
import { Link } from "react-router-dom";
import { Download } from "../components/ui/react-icons";

const Home = () => {
  const currentTheme = checkState("theme");
  const {
    primaryButtonBgColor,
    secondaryButtonBgColor,
    primaryButtonTextColor,
    hoverPrimaryButtonBgColor,
    hoverSecondaryButtonBgColor,
    leftBgColor,
    descriptionTextColor
  } = new ThemeColorController(currentTheme as TTheme).getThemeColor;

  return (
    <div className={`z-0 flex items-center text-center align-middle justify-center font-["arial"] font-bold text-2xl h-full flex-col gap-y-5 hover:cursor-default w-[100%] lg:w-[50%] overflow-hidden ${leftBgColor}`}>
      <Initiation />
      <p className="max-w-md text-6xl">{INITIATION.introduction as string}</p>
      <p className={`max-w-md mx-3 text-sm lg:text-xs font-light ${descriptionTextColor} text-justify tracking-wider`}>
        {INITIATION.description as string}
      </p>
      <div className="text-base mt-5">
        <div className="flex flex-col gap-y-1 w-full items-center">
          <div className="flex flex-row items-center justify-center gap-x-3 transition-opacity ease-in duration-700">
            <Link
              to={"about"}
              className={`rounded-md px-3 py-1.5 text-sm ${primaryButtonBgColor} ${primaryButtonTextColor} font-normal tracking-wider ${hoverPrimaryButtonBgColor} hover:ease-in hover:duration-75`}
            >
              Get Started
            </Link>
            <Link
              to="/files/resume_LeeHoKwong.pdf"
              download={true}
              target="_blank"
              className={`border-[1px] border-gray rounded-md px-3 py-1.5 text-sm ${secondaryButtonBgColor} ${secondaryButtonBgColor} font-normal tracking-wider flex items-center align-middle ${hoverSecondaryButtonBgColor}`}
            >
              <p>View My Resume</p>
              <Download className="ml-1" size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
