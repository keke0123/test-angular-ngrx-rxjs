import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromTab from '../tab.reducer';

export const tabStoreFeatureKey = 'tabStore';

export interface State {

  [fromTab.tabFeatureKey]: fromTab.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromTab.tabFeatureKey]: fromTab.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
