import { useAppSelector as useSelector } from "./hooks";
import { RootState } from "./store";

export const checkState = (_item: keyof RootState) =>
  useSelector((state) => state.theme.value);
