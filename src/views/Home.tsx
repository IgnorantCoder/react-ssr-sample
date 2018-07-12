import * as React from 'react';
import ReactHelmet from 'react-helmet'; 

const component: React.SFC = () => {
    return (
        <div>
            <ReactHelmet>
                <title>SSR sample</title>
                <meta name="description" content={'There is home.'} />
            </ReactHelmet>
            There is home.
        </div>
    )
};

export default component;
