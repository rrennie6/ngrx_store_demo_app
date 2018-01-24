import {Action} from '@ngrx/store';
import {ActionReducer, combineReducers} from '@ngrx/store';
import * as newEntryActions from '../actions/new_entry';

export interface State {
  days: number;
  withOrWithout: boolean;
  goalName: string;
}

export const daysReducer = (days: number, action: Action): number => {
    switch (action.type) {
      case newEntryActions.SET_DAYS: {
        return action.payload.days;
      }
      default: {
        return days;
      }
    }
  };

export const withOrWithoutReducer = (withOrWithout: boolean, action: Action): boolean => {
    switch (action.type) {
      case newEntryActions.SET_WITH_OR_WITHOUT: {
        return action.payload.withOrWithout;
      }
      default: {
        return withOrWithout;
      }
    }
  };

export const goalNameReducer = (goalName: string, action: Action): string => {
    switch (action.type) {
      case newEntryActions.SET_GOAL_NAME: {
        return action.payload.goalName;
      }
      default: {
        return goalName;
      }
    }
  };

export const reducer: ActionReducer<State> = combineReducers({
  days: daysReducer,
  withOrWithout: withOrWithoutReducer,
  goalName: goalNameReducer
});
