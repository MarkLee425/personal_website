import Navbar from "./components/navigation/Navbar.navigation";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
