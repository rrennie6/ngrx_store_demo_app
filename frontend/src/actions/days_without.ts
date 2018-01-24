import {Action} from '@ngrx/store';
import {DaysWithoutEntry} from '../models/days_without_entry';

export const LOAD          = '[Days Without] Load';
export const LOAD_SUCCESS  = '[Days Without] Load Success';
export const RESET         = '[Days Without] Reset';
export const RESET_SUCCESS = '[Days Without] Reset Success';
export const DELETE         = '[Days Without] Delete';
export const DELETE_SUCCESS = '[Days Without] Delete Success';

export interface LoadSuccessPayload {
  entries: Array<DaysWithoutEntry>;
}

export interface ResetPayload {
  goalName: string;
}

export interface ResetSuccessPayload {
  goalName: string;
}

export interface DeletePayload {
  goalName: string;
}

export interface DeleteSuccessPayload {
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

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload: DeletePayload) { }
}

export class DeleteSuccess implements Action {
  readonly type = DELETE_SUCCESS;
  constructor(public payload: DeleteSuccessPayload) { }
}

export type Actions = Load
  | LoadSuccess
  | Reset
  | ResetSuccess
  | Delete
  | DeleteSuccess;
