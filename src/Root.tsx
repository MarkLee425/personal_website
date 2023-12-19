import Footer from "./components/footer";
import Floatbar from "./components/navigation/Floatbar.navigation";
import Navbar from "./components/navigation/Navbar.navigation";
import { Outlet } from "react-router-dom";
import usePathname from "./hooks/usePathname";
import { useGlobalState } from "./redux/functions";

function Root() {
  const pathname = usePathname();
  const theme = useGlobalState("theme");
  return (
    <>
      <Navbar theme={theme} pathname={pathname} />
      <Outlet />
      <div className="flex justify-center items-center ">
        <Floatbar theme={theme} pathname={pathname} />
      </div>
      <Footer theme={theme} />
    </>
  );
}

export default Root;
