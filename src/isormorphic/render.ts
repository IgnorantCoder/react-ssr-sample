import { RootState } from "../modules";
import * as ReactHelmet from 'react-helmet';

export const render = (content: string,
                       state: RootState,
                       header: ReactHelmet.HelmetData,
                       styleTag: string) => {
    return `
        <!DOCTYPE html>
        <html lang="ja">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                ${header.title.toString()}
                ${header.meta.toString()}
                ${styleTag}
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${JSON.stringify(state)};
                </script>
                <script type="text/javascript" charset="utf-8" src="static/js/bundle.js" async></script>
            </body>
        </html>
    `;
};