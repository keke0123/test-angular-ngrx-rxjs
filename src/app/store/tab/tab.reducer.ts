import { Action } from '@ngrx/store';
import * as tabActions from './tab.actions';


export const tabFeatureKey = 'tab';

export interface State {
  activeTab: Array<string>;
  formData: Object;
}

export const initialState: State = {
  activeTab: ['input1'],
  formData: {}
};

export function reducer(state = initialState, action: tabActions.TabActions): State {
  switch (action.type) {
    // test 용
    case tabActions.TabActionTypes.InitTabs:
      return initActiveTab(state);
    case tabActions.TabActionTypes.SetTabs:
      return addActiveTab(state, action);
    default:
      return state;
  }
}

function initActiveTab(state: State): State {
  console.log('init tab');
  return {
    ...state,
    activeTab: ['input1']
  };
}

function addActiveTab(state: State, action: tabActions.SetTabs): State {
  state.activeTab.unshift(action.payload);
  return {
    ...state,
  }
}
