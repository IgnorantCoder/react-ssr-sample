import { combineReducers } from 'redux';
import { RouterState } from 'connected-react-router';
import * as App from './App';

export type RootState = {
    app: App.State,
    router: RouterState,
};

export const rootReducer = combineReducers<RootState>({
    app: App.reducer
} as any);

export const initState = (): Partial<RootState> => {
    return {
        app: App.init(),
    };
};

export const actionCreator = {
    app: App.actionCreator
};