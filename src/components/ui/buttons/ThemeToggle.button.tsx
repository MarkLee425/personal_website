"use client";

import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../../redux/hooks";
import { switchThemeMode } from "../../../redux/slices";
import { DarkMode, LightMode } from "../react-icons";

const ThemeToggleButton = ({ ...rest }) => {
  const currentTheme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`ml-3 justify-center align-middle items-center flex mr-10`}
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
