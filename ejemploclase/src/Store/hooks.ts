import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".";


//dispatch es el medio por el cual podemos actualizar el estado invocando actions que ejecutan reducers
export const useAppDispatch = () => useDispatch<AppDispatch>();
//
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;