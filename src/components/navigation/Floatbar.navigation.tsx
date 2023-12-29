import { Key, memo } from "react";
import { Link, To } from "react-router-dom";
import { linkRoutes } from "./constants";
import { TThemeProps } from "../../controllers/ThemeColor.controller";

type TFloatbar = {
  pathname: string;
  style: TThemeProps;
};

const Floatbar = memo(({ pathname, style }: TFloatbar) => {
  return (
    <div
      className={`fixed z-30 border-2 ${style.floatBarBorderColor} ${style.floatBarBackgroundColor} bottom-10 w-fit min-w-[100px] flex flex-row justify-evenly py-1 rounded-3xl px-3 gap-x-2 max-[300px]:hidden`}
    >
      {linkRoutes.map((each) => (
        <Link
          to={each.route as To}
          key={each.description as Key}
          className={`rounded-full p-2 hover:bg-gray-200 hover:text-black active:opacity-[0.85] active:shadow-none ${
            pathname === each.route
              ? `${style.floatBarButtonColor} orange-secondary`
              : `bg-transparent ${style.floatBarTextColor}`
          }`}
          data-ripple-light="true"
          title={each.description as string}
        >
          {each.icon}
        </Link>
      ))}
    </div>
  );
});

export default Floatbar;
