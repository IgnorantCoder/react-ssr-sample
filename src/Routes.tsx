import * as React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import Home from './views/Home';
import AboutUs from './views/AboutUs';
import NavigationBar from './views/NavigationBar';

const component: React.SFC = () => {
    return (
        <div>
            <NavigationBar 
                items={[
                    { display: 'Home', to: '/' },
                    { display: 'About us', to: '/aboutus' },
                ]} 
            />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/aboutus'} component={AboutUs} />
            </Switch>
        </div>
    );
};

export default component;
