import {Action} from '@ngrx/store';
import {ActionReducer, combineReducers} from '@ngrx/store';
import * as daysWithoutActions from '../actions/days_without';
import * as newEntryActions from '../actions/new_entry';
import {DaysWithoutEntry} from '../models/days_without_entry';
import * as fromNewEntry from './new_entry';
import * as fromView from './view';

export interface State {
  daysWithoutEntries: Array<DaysWithoutEntry>;
  newEntry: fromNewEntry.State;
  view: fromView.State;
}

export const daysWithoutReducer =
  (entries: Array<DaysWithoutEntry>, action: Action): Array<DaysWithoutEntry> => {
    switch (action.type) {
      case daysWithoutActions.LOAD_SUCCESS: {
        return action.payload.entries;
      }
      case newEntryActions.SAVE_SUCCESS: {
        return entries.concat(action.payload.entry);
      }
      case daysWithoutActions.RESET_SUCCESS: {
        entries.find(entry => entry.goalName == action.payload.goalName).days = 0
        return entries;
      }
      case daysWithoutActions.DELETE_SUCCESS: {
        return entries.filter(entry => entry.goalName !== action.payload.goalName);
      }
      default: {
        return entries;
      }
    }
  };

export const reducer: ActionReducer<State> = combineReducers({
  daysWithoutEntries: daysWithoutReducer,
  newEntry: fromNewEntry.reducer,
  view: fromView.reducer
});
