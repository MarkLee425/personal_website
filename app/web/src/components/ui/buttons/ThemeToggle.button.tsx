import { useGlobalState } from "../../../hooks";
import {
  useAppDispatch as useDispatch,
} from "../../../redux/hooks";
import { switchThemeMode } from "../../../redux/slices";
import { DarkMode, LightMode } from "../react-icons";

const ThemeToggleButton = ({ ...rest }) => {
  const currentTheme = useGlobalState("theme");
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`ml-3 justify-center align-middle items-center flex`}
        {...rest}
      >
        {currentTheme == "light" ? (
          <button
            className="rounded-full px-1 py-1 hover:text-orange-400"
            onClick={() => {
              dispatch(switchThemeMode());
            }}
          >
            <DarkMode size={25} />
          </button>
        ) : (
          <button
            className="rounded-full px-1 py-1 hover:text-orange-400"
            onClick={() => {
              dispatch(switchThemeMode());
            }}
          >
            <LightMode size={25} />
          </button>
        )}
      </div>
    </>
  );
};

export default ThemeToggleButton;
