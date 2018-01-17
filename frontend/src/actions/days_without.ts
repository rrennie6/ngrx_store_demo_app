import {Action} from '@ngrx/store';
import {DaysWithoutEntry} from '../models/days_without_entry';

export const LOAD =         '[Days Without] Load';
export const LOAD_SUCCESS = '[Days Without] Load Success';

export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: Array<DaysWithoutEntry>) { }
}

export type Actions = Load | LoadSuccess;
