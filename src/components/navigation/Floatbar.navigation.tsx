import { Key, memo } from "react";
import { Link, To } from "react-router-dom";
import { linkRoutes } from "./constants";
import { ThemeColorController } from "../../controllers/ThemeColor.controller";

type TFloatbar = {
  pathname: string;
  theme: TTheme;
};

const Floatbar = memo(({ pathname, theme }: TFloatbar) => {
  const {
    floatBarBackgroundColor,
    floatBarBorderColor,
    floatBarButtonColor,
    floatBarTextColor,
  } = new ThemeColorController(theme as TTheme).getThemeColor;
  return (
    <div
      className={`fixed z-30 border-2 ${floatBarBorderColor} ${floatBarBackgroundColor} bottom-10 w-fit min-w-[100px] flex flex-row justify-evenly py-1 rounded-3xl px-3 gap-x-2 max-[300px]:hidden`}
    >
      {linkRoutes.map((each) => (
        <Link
          to={each.route as To}
          key={each.description as Key}
          className={`rounded-full p-2 hover:bg-gray-200 hover:text-black ${
            pathname === each.route
              ? `${floatBarButtonColor} orange-secondary`
              : `bg-transparent ${floatBarTextColor}`
          }`}
          title={each.description as string}
        >
          {each.icon}
        </Link>
      ))}
    </div>
  );
});

export default Floatbar;
