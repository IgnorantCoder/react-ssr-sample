import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';

export type RootState = {
    router: RouterState,
};

export const rootReducer = combineReducers<RootState>({
} as any);

export const initState = (): Partial<RootState> => {
    return {};
};
