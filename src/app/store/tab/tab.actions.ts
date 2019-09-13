import { Action } from '@ngrx/store';

export enum TabActionTypes {
  LoadTabs = '[Tab] Load Tabs',
  SetTabs = '[Tab] Set Tabs',
}

export class LoadTabs implements Action {
  readonly type = TabActionTypes.LoadTabs;
}

export class SetTabs implements Action {
  readonly type = TabActionTypes.SetTabs;
}


export type TabActions = LoadTabs;
