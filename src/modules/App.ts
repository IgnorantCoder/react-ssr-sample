import { Action } from 'redux';

export type SetRenderingSidePayload = {
    isClientSide: boolean;
};

export interface SetRenderingSideAction extends Action {
    type: 'SET_RENDERING_SIDE';
    payload: SetRenderingSidePayload;
}

export const setRenderingSide = (payload: SetRenderingSidePayload): SetRenderingSideAction => {
    return {
        payload,
        type: 'SET_RENDERING_SIDE'
    };
};

export type Actions = SetRenderingSideAction;

export type State = {
    isClientSide: boolean;
};

export const init = () => {
    return {
        isClientSide: false
    };
};

export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
        case 'SET_RENDERING_SIDE':
            return Object.assign({}, state, { isClientSide: action.payload.isClientSide });
        default: 
            return state;
    }
};

export const actionCreator = {
    setRenderingSide
};