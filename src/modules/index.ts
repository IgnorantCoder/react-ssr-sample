import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import * as App from './App';

export type RootState = {
    app: App.State,
    router: RouterState,
};

export const rootReducer = combineReducers<RootState>({
    app: App.reducer,
    router: routerReducer,
} as any);

export const initState = (): RootState => {
    return {
        app: App.init(),
        router: {
            location: null,
        },
    };
};

export const actionCreator = {
    app: App.actionCreator
};