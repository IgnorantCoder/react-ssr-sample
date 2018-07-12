import * as React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import Home from './views/Home';
import AboutUs from './views/AboutUs';
import NavigationBar from './views/NavigationBar';
import { compose, lifecycle} from 'recompose';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { actionCreator, RootState } from './modules';

type StateProps = {
    isClientSide: boolean;
}

type DispatchProps = {
    setClientSide: () => void; 
};

type Props = StateProps & DispatchProps;

const component: React.SFC<Props> = (props: Props) => {
    console.log(props.isClientSide ? 'client-side' : 'server-side');
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

const mapStateToProps = (state: RootState): StateProps => {
    return {
        isClientSide: state.app.isClientSide
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
    return {
        setClientSide: () => { dispatch(actionCreator.app.setRenderingSide({ isClientSide: true })) }
    }
};

export default compose<Props, {}>(
    connect<StateProps, DispatchProps, {}, RootState>(
        mapStateToProps, 
        mapDispatchToProps,
        null,
        { pure: false }
    ),
    lifecycle<Props, {}>({
        componentDidMount() { this.props.setClientSide(); }
    }),
)(component);

