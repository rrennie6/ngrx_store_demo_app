import {Action} from '@ngrx/store';
import {DaysWithoutEntry} from '../models/days_without_entry';

export const SET_DAYS = '[New Entry] Set Days';
export const SET_WITH_OR_WITHOUT = '[New Entry] Set With Or Without';
export const SET_GOAL_NAME = '[New Entry] Set Goal Name';
export const SAVE          = '[Days Without] Save';
export const SAVE_SUCCESS  = '[Days Without] Save Success';

export interface SetDaysPayload {
  days: number;
}

export interface SetWithOrWithoutPayload {
  withOrWithout: boolean;
}

export interface SetGoalNamePayload {
  goalName: string;
}

export interface SaveSuccessPayload {
  entry: DaysWithoutEntry;
}

export class SetDays implements Action {
  readonly type = SET_DAYS;
  constructor(public payload: SetDaysPayload) { }
}

export class SetWithOrWithout implements Action {
  readonly type = SET_WITH_OR_WITHOUT;
  constructor(public payload: SetWithOrWithoutPayload) { }
}

export class SetGoalName implements Action {
  readonly type = SET_GOAL_NAME;
  constructor(public payload: SetGoalNamePayload) { }
}

export class Save implements Action {
  readonly type = SAVE;
}

export class SaveSuccess implements Action {
  readonly type = SAVE_SUCCESS;
  constructor(public payload: SaveSuccessPayload) { }
}

export type Actions = SetDays
  | SetWithOrWithout
  | SetGoalName
  | Save
  | SaveSuccess;
