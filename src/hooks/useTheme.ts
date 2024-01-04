import { useOutletContext } from "react-router-dom";
import { ThemeProps } from "../controllers/ThemeColor.controller";

type ContextType = {
  theme: TTheme;
  style: ThemeProps;
};

export function useTheme() {
  return useOutletContext<ContextType>();
}
