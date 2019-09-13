import { Action } from '@ngrx/store';
import * as tabActions from './tab.actions';


export const tabFeatureKey = 'tab';

export interface State {
  activeTab: Array<string>;
  formData: Object;
}

export const initialState: State = {
  activeTab: ['input1', 'input2'],
  formData: {}
};

export function reducer(state = initialState, action: tabActions.TabActions): State {
  switch (action.type) {
    case tabActions.TabActionTypes.LoadTabs:
      return tabActive(state, action);
    default:
      return state;
  }
}

function tabActive(state: State, action: tabActions.LoadTabs): State {
  let array = ['input1'];
  return {
    ...state,
    activeTab: array,
  }
}
