import Footer from "./components/footer";
import Floatbar from "./components/navigation/Floatbar.navigation";
import Navbar from "./components/navigation/Navbar.navigation";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Floatbar />
      <Footer />
    </>
  );
}

export default Root;
