import { History } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { rootReducer, RootState } from '../modules';

export const configureStore = (initialState: Partial<RootState>, history: History) => {
    const middleWare = applyMiddleware(routerMiddleware(history));
    const store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        middleWare);
    return {
        store,
        history,
    };
};