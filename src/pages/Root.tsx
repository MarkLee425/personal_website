import Navbar from "../components/navigation/Navbar.navigation";
import TypeWriter from "../components/typewriter/TypeWriter";
import Initiation from "./Initiation";
import {
  useAppDispatch as useDispatch
} from "../redux/hooks";
import { switchThemeMode } from "../redux/slices";

function Root() {
  const dispatch = useDispatch();

  const toggleHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(switchThemeMode());
  };
  return (
    <>
      <Navbar />
      {/* <Initiation /> */}
      
    </>
  );
}

export default Root;
