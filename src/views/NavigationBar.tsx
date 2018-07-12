import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import { RootState } from '../modules';

type OwnProps = {
    className?: string;
    items: {
        display: string;
        to: string;
    }[];
};

type StateProps = {
    enabled: boolean[];
}

type Props = OwnProps & StateProps;

const component: React.SFC<Props> = (props: Props) => {
    return (
        <ul className={props.className}>
            {
                props.items.map((e, i) => {
                    return (
                        <li key={e.to}>
                            {
                                props.enabled[i] 
                                    ? <Link to={e.to}>{e.display}</Link>
                                    : <span>{e.display}</span>
                            }
                        </li>
                    );
                })
            }
        </ul>
    );
};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
    const loc = state.router.location;
    if (loc == null) {
        return {};
    }
    
    return {
        enabled: ownProps.items.map(e => e.to !== loc.pathname),
    };
};

const enhancedComponent = connect(
    mapStateToProps
)(component);

export default styledComponents(enhancedComponent)`
    list-style-type: none;
    margin: 0;
    padding: 10px 0px;
    li {
        display: inline-block;
        padding: 0px 5px;
        &+ li {
            border-left: 1px solid gray;
        }
    }
`;