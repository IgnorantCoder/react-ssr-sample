import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Routes from './Routes';
import { initState, RootState } from './modules';
import { configureStore } from './isormorphic/store';

declare var window: { INITIAL_STATE: Partial<RootState>; };

const initialState: Partial<RootState> = window.INITIAL_STATE || initState();
delete window.INITIAL_STATE;

const preload = configureStore(
    initialState,
    createBrowserHistory());

ReactDOM.hydrate(
    <Provider store={preload.store}>
        <ConnectedRouter history={preload.history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));