import { useAppSelector as useSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

type TItem = Exclude<keyof RootState, "_persist">

export const useGlobalState = (item: TItem) =>
  useSelector((state) => state[item].value);
