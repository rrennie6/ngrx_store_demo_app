import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {State} from '../reducers';

export const selectSavePanelOpen = (store: Store<State>): Observable<boolean> =>
  store.select(state => state.view.savePanelOpen);
