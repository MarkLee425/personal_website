import { useOutletContext } from "react-router-dom";
import { TThemeProps } from "../controllers/ThemeColor.controller";

type ContextType = {
  theme: TTheme;
  style: TThemeProps;
};

export function useTheme() {
  return useOutletContext<ContextType>();
}
