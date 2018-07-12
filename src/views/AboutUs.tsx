import * as React from 'react';
import ReactHelmet from 'react-helmet'; 

const component: React.SFC = () => {
    return (
        <div>
            <ReactHelmet>
                <title>SSR sample</title>
                <meta name="description" content={'There is about us.'} />
            </ReactHelmet>
            There is about us.
        </div>
    );
};

export default component;
