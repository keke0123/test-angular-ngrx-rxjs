import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromAuth from '../auth.reducer';

export const exStoreFeatureKey = 'exStore';

export interface State {

  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromAuth.authFeatureKey]: fromAuth.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
