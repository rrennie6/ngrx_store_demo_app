import {Action} from '@ngrx/store';
import {DaysWithoutEntry} from '../models/days_without_entry';

export const LOAD         = '[Days Without] Load';
export const LOAD_SUCCESS = '[Days Without] Load Success';
export const SAVE         = '[Days Without] Save';
export const SAVE_SUCCESS = '[Days Without] Save Success';
export const RESET        = '[Days Without] Reset';

export interface LoadSuccessPayload {
  entries: Array<DaysWithoutEntry>;
}

export interface SavePayload {
  entry: DaysWithoutEntry;
}

export interface SaveSuccessPayload {
  entry: DaysWithoutEntry;
}

export interface ResetPayload {
  goalName: string;
}

export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: LoadSuccessPayload) { }
}

export class Save implements Action {
  readonly type = SAVE;
  constructor(public payload: SavePayload) { }
}

export class SaveSuccess implements Action {
  readonly type = SAVE_SUCCESS;
  constructor(public payload: SaveSuccessPayload) { }
}

export class Reset implements Action {
  readonly type = RESET;
  constructor(public payload: ResetPayload) { }
}

export type Actions = Load
  | LoadSuccess
  | Save
  | SaveSuccess
  | Reset;
