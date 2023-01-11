import RootReducer from '../store/RootReducer';
import store from '../store/store';

export type RootStore = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;
