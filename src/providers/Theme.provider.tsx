import { useAppSelector as useSelector } from "../redux/hooks";
import { ThemeColorController } from "../controllers/ThemeColor.controller";

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
  let { bgColor, textColor } = new ThemeColorController(currentTheme)
    .getThemeColor;
  const updateTemporaryColor = (options: TOptions): void => {
    if (options?.bgColor) {
      bgColor = options.bgColor;
    }
    if (options?.textColor) {
      textColor = options.textColor;
    }
  };

  if (!options) {
    // options cannot be undefined in this case
    // @ts-ignore
    updateTemporaryColor(options);
  }
  return (
    <>
      <div className={`h-screen z-30 ${bgColor} ${textColor}`}>{children}</div>
    </>
  );
};

export default ThemeProvider;
