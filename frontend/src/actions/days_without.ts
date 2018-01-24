import {Action} from '@ngrx/store';
import {DaysWithoutEntry} from '../models/days_without_entry';

export const LOAD          = '[Days Without] Load';
export const LOAD_SUCCESS  = '[Days Without] Load Success';
export const RESET         = '[Days Without] Reset';
export const RESET_SUCCESS = '[Days Without] Reset Success';

export interface LoadSuccessPayload {
  entries: Array<DaysWithoutEntry>;
}

export interface ResetPayload {
  goalName: string;
}

export interface ResetSuccessPayload {
  goalName: string;
}

export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: LoadSuccessPayload) { }
}

export class Reset implements Action {
  readonly type = RESET;
  constructor(public payload: ResetPayload) { }
}

export class ResetSuccess implements Action {
  readonly type = RESET_SUCCESS;
  constructor(public payload: ResetSuccessPayload) { }
}

export type Actions = Load
  | LoadSuccess
  | Reset
  | ResetSuccess;
