import { useAppSelector as useSelector } from "../../redux/hooks";
import { ThemeColorController } from "../../controllers/ThemeColor.controller";

type TChildren = JSX.Element;
type TOptions = {
  bgColor?: string;
  textColor?: string;
};

type TThemeProviderProps = {
  children?: TChildren;
  options?: TOptions;
};

const ThemeProvider = ({ children, options }: TThemeProviderProps) => {
  const currentTheme = useSelector((state) => state.theme.value);
  const style = new ThemeColorController(currentTheme).getThemeColor;
  const updateTemporaryColor = (options: TOptions): void => {
    if (options?.bgColor) {
      style.bgColor.primary = options.bgColor;
    }
    if (options?.textColor) {
      style.textColor.primary = options.textColor;
    }
  };

  if (!options) {
    // @ts-expect-error options cannot be undefined in this case
    updateTemporaryColor(options);
  }
  return (
    <>
      <main
        className={`h-[100%] min-h-screen fixed z-20 top-0 overflow-auto left-0 w-[100%] ${style.bgColor.primary} ${style.textColor.primary}`}
      >
        {children}
      </main>
    </>
  );
};

export default ThemeProvider;
