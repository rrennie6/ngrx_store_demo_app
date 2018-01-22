import {Action} from '@ngrx/store';
import {ActionReducer, combineReducers} from '@ngrx/store';
import * as daysWithoutActions from '../actions/days_without';
import {DaysWithoutEntry} from '../models/days_without_entry';

export interface State {
  daysWithoutEntries: Array<DaysWithoutEntry>;
}

export const daysWithoutReducer =
  (entries: Array<DaysWithoutEntry>, action: Action): Array<DaysWithoutEntry> => {
    switch (action.type) {
      case daysWithoutActions.LOAD_SUCCESS: {
        return action.payload.entries;
      }
      case daysWithoutActions.SAVE_SUCCESS: {
        return entries.concat(action.payload.entry);
      }
      case daysWithoutActions.RESET_SUCCESS: {
        entries.find(entry => entry.goalName == action.payload.goalName).days = 0
        return entries;
      }
      default: {
        return entries;
      }
    }
  };

export const reducer: ActionReducer<State> = combineReducers({
  daysWithoutEntries: daysWithoutReducer
});
