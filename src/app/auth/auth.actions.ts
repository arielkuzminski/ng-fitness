import { Action } from '@ngrx/store';

export const SET_AUTHENTICATED = '[AUTH] Set Authenticated';
export const SET_UNAUTHENTICATED = '[AUTH] Set Unauthenticated';
export const SET_CURRENT_USER_ID = '[AUTH] Set Current User ID';

export class SetAuthenticated implements Action {
  readonly type = SET_AUTHENTICATED;
}

export class SetUnauthenticated implements Action {
  readonly type = SET_UNAUTHENTICATED;
}

export class SetCurrentUserID implements Action {
  readonly type = SET_CURRENT_USER_ID;

  constructor(public payload: string) {}
}

export type AuthActions = SetAuthenticated | SetUnauthenticated | SetCurrentUserID;
