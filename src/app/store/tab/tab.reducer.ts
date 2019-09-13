import { Action } from '@ngrx/store';


export const tabFeatureKey = 'tab';

export interface State {
  activeTab: Array<string>;
  formData: Object;
}

export const initialState: State = {
  activeTab: ['input1', 'input2'],
  formData: {}
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}

function tabActive(url) {

}
