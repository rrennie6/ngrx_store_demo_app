import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {State} from '../reducers';

export const selectDays = (store: Store<State>): Observable<number> =>
  store.select(state => state.newEntry.days);

export const selectWithOrWithout = (store: Store<State>): Observable<boolean> =>
  store.select(state => state.newEntry.withOrWithout);

export const selectGoalName = (store: Store<State>): Observable<string> =>
  store.select(state => state.newEntry.goalName);