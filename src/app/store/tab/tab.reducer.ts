import { Action } from '@ngrx/store';


export const tabFeatureKey = 'tab';

export interface State {
  activeTab: Array<string>;
  formData: Object;
}

export const initialState: State = {
  activeTab: [],
  formData: {}
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
