import { Action } from '@ngrx/store';
import * as tabActions from './tab.actions';


export const tabFeatureKey = 'tab';

export interface State {
  activeTab: Array<string>;
  formData: Object;
}

export const initialState: State = {
  activeTab: ['input1'],
  formData: {
    // input1: {
    //   id: 'test',
    //   pwd: 'pwd',
    // }
  }
};

export function reducer(state = initialState, action: tabActions.TabActions): State {
  switch (action.type) {
    // test 용
    case tabActions.TabActionTypes.InitTabs:
      return initActiveTab(state);
    case tabActions.TabActionTypes.SetTabs:
      return addActiveTab(state, action);
    case tabActions.TabActionTypes.SetFormData:
      return setFormData(state, action);
    case tabActions.TabActionTypes.InitFormData:
      return initFormData(state);
    default:
      return state;
  }
}

function initActiveTab(state: State): State {
  // console.log('init tab');
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

function initFormData(state: State): State {
  // console.log('init tab');
  return {
    ...state,
    formData: {}
  };
}

function setFormData(state: State, action: tabActions.SetFormData): State {
  return {
    ...state,
    formData: {
      ...state.formData,
      [action.payload['id']]: action.payload['data']
    }
  }
}
