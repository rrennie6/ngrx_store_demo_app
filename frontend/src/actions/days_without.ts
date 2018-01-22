import {Action} from '@ngrx/store';
import {DaysWithoutEntry} from '../models/days_without_entry';

export const LOAD         = '[Days Without] Load';
export const LOAD_SUCCESS = '[Days Without] Load Success';
export const SAVE         = '[Days Without] Save';
export const RESET        = '[Days Without] Reset';

export interface SavePayload {
  entry: DaysWithoutEntry;
}

export interface ResetPayload {
  entry: DaysWithoutEntry;
}

export class Load implements Action {
  readonly type = LOAD;
}

export class Save implements Action {
  readonly type = SAVE;
  constructor(public payload: SavePayload) { }
}

export class Reset implements Action {
  readonly type = RESET;
  constructor(public payload: ResetPayload) { }
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: Array<DaysWithoutEntry>) { }
}

export type Actions = Load
  | LoadSuccess
  | Save
  | Reset;
