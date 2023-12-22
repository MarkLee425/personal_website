import Floatbar from "./components/navigation/Floatbar.navigation";
import Navbar from "./components/navigation/Navbar.navigation";
import { Outlet, useOutletContext } from "react-router-dom";
import usePathname from "./hooks/usePathname";
import { useGlobalState } from "./redux/functions";
import { TThemeProps, ThemeColorController } from "./controllers/ThemeColor.controller";

type ContextType = {
  theme: TTheme;
  style: TThemeProps;
}

function Root() {
  const pathname = usePathname();
  const theme = useGlobalState("theme");
  const style = new ThemeColorController(theme).getThemeColor;
  return (
    <>
      <Navbar style={style} pathname={pathname} />
      <Outlet context={{style, theme}} />
      <div className="flex justify-center items-center">
        <Floatbar style={style} pathname={pathname} />
      </div>
    </>
  );
}

export function useTheme() {
  return useOutletContext<ContextType>();
}

export default Root;
