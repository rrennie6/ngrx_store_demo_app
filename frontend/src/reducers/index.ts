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
        entries.push(action.payload.entry);
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
