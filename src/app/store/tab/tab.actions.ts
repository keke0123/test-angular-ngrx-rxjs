import { Action } from '@ngrx/store';

export enum TabActionTypes {
  InitTabs = '[Tab] Init Tabs',
  SetTabs = '[Tab] Set Tabs',
}

export class InitTabs implements Action {
  readonly type = TabActionTypes.InitTabs;
}

export class SetTabs implements Action {
  readonly type = TabActionTypes.SetTabs;

  constructor(public payload: string) {}
}


export type TabActions = InitTabs | SetTabs;
