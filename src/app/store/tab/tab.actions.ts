import { Action } from '@ngrx/store';

export enum TabActionTypes {
  LoadTabs = '[Tab] Load Tabs',
  
  
}

export class LoadTabs implements Action {
  readonly type = TabActionTypes.LoadTabs;
}


export type TabActions = LoadTabs;
