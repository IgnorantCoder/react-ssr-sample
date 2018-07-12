import { History } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer, RootState } from '../modules';

export const configureStore = (
    initialState: RootState,
    history: History) => {
    const middleWare = applyMiddleware(routerMiddleware(history));
    const store = createStore(rootReducer, initialState, middleWare);
    return {
        store,
        history,
    };
};