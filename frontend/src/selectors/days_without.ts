import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {State} from '../reducers';
import {DaysWithoutEntry} from '../models/days_without_entry';

export const selectDaysWithoutEntries =
  (store: Store<State>): Observable<Array<DaysWithoutEntry>> =>
  store.select(state => state.daysWithoutEntries).distinctUntilChanged();
