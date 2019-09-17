import { Action } from '@ngrx/store';
import * as authActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  userName?: string;
}

export const initialState: State = {
  userName: 'hihi'
};

export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.SetAuths:
      console.log('set auth 1');
      return handleSetAuths(state, action);
    case authActions.AuthActionTypes.LoadAuths:
      console.log('load auth 1');
      return loadAuth(state, action);
      // return state;
    default:
      return state;
  }
}

function handleSetAuths(state: State, action: authActions.SetAuths): State {
  console.log(state, action);
  return {
    ...state,
    userName: action.payload
  }
}

function loadAuth(state: State, action: authActions.LoadAuths): State {
  console.log('load auth 2');
  console.log('action', action);
  console.log('state', state);
  return {
    ...state,
  }
}
