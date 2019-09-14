import { Action } from '@ngrx/store';

export enum TabActionTypes {
  InitTabs = '[Tab] Init Tabs',
  SetTabs = '[Tab] Set Tabs',
  InitFormData = '[Tab] Init FormData',
  SetFormData = '[Tab] Set FormData',
}

export class InitTabs implements Action {
  readonly type = TabActionTypes.InitTabs;
}

export class SetTabs implements Action {
  readonly type = TabActionTypes.SetTabs;

  constructor(public payload: string) {}
}

export class InitFormData implements Action {
  readonly type = TabActionTypes.InitFormData;
}

export class SetFormData implements Action {
  readonly type = TabActionTypes.SetFormData;

  constructor(public payload: any) {}
}


export type TabActions = InitTabs | SetTabs | InitFormData | SetFormData;

// type 이런식으로 적을수도 있을거 같다.
// const all = union({login, loginSuccess, loginFailure, logout});
// export type LoginActionsUnion = typeof all;
