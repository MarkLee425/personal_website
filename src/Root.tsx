import Floatbar from "./components/navigation/Floatbar.navigation";
import Navbar from "./components/navigation/Navbar.navigation";
import { Outlet } from "react-router-dom";
import usePathname from "./hooks/usePathname";
import { ThemeColorController } from "./controllers/ThemeColor.controller";
import { useGlobalState } from "./hooks";

function Root() {
  const pathname = usePathname();
  const theme = useGlobalState("theme");
  const style = new ThemeColorController(theme as TTheme).getThemeColor;
  return (
    <>
      <Navbar style={style} pathname={pathname} />
      <Outlet context={{ style, theme }} />
      <div className="flex justify-center items-center">
        <Floatbar style={style} pathname={pathname} />
      </div>
    </>
  );
}

export default Root;
