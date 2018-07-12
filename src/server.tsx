import * as Express from 'express';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { renderToString } from 'react-dom/server';
import ReactHelmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import createMemoryHistory from 'history/createMemoryHistory';

import Routes from './Routes';
import { render } from './isormorphic/render';
import { configureStore } from './isormorphic/store';
import { initState } from './modules';

const app = Express();

app.use(Express.static(__dirname + '/public'));
app.get(
    '*',
    (req: Express.Request, res: Express.Response) => {
        const { store, history } = configureStore(
            initState(),
            createMemoryHistory({
                initialEntries: [req.url],
                initialIndex: 0,
            }));
        const sheet = new ServerStyleSheet();
        const content = renderToString(
            sheet.collectStyles(
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Routes />
                    </ConnectedRouter>
                </Provider>));
        res.write(
            render(content,
                   store.getState(),
                   ReactHelmet.renderStatic(),
                   sheet.getStyleTags()));
        res.end();
    });

app.listen(
    3000,
    () => {
        console.log('app listening on port 3000!');
    });
