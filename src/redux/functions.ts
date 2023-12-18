import { useAppSelector as useSelector } from "./hooks";
import { RootState } from "./store";

export const checkState = (item: keyof(RootState)) => useSelector(state => state[item].value);