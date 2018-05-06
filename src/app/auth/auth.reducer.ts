import { Action } from '@ngrx/store';
import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_CURRENT_USER_ID } from './auth.actions';

export interface State {
  isAuthenticated: boolean;
  currentUserID: string;
}

const initialState: State = {
  isAuthenticated: false,
  currentUserID: ''
};

export function authReducer (state = initialState, action: AuthActions) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        isAuthenticated: true
      };
    case SET_UNAUTHENTICATED:
      return {
        isAuthenticated: false
      };
    case SET_CURRENT_USER_ID:
      return {
        ...state,
        currentUserID: action.payload
      }
    default: {
      return state;
    }
  }
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
export const getCurrentUserID = (state: State) => state.currentUserID;
