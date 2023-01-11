import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStore } from '../types/Types';
export const useTypedSelector: TypedUseSelectorHook<RootStore> = useSelector;
