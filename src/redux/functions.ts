import { useAppSelector as useSelector } from "./hooks";
import { RootState } from "./store";

type TItem = Exclude<keyof RootState, "_persist">

export const useGlobalState = (item: TItem) =>
  useSelector((state) => state[item].value);
