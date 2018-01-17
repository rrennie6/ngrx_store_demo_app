import {Injectable, Inject} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {State} from '../reducers';
import {Observable} from 'rxjs/Observable';
import {Effect, Actions} from '@ngrx/effects';
import * as daysWithoutActions from '../actions/days_without';
import {DaysWithoutService} from '../services/days_without_service';
import {DaysWithoutEntry} from '../models/days_without_entry';

@Injectable() export class DaysWithoutEffects {
  constructor(
    private actions: Actions,
    private daysWithoutService: DaysWithoutService,
    private store: Store<State>
  ) { }

  @Effect() loadDaysWithoutEntries = (): Observable<Action> =>
    this.actions
      .ofType(daysWithoutActions.LOAD)
      .mergeMap(this.callService)
      .map(this.handleResponse);

  private readonly callService = (action: Action): Observable<Array<DaysWithoutEntry>> => {
    return this.daysWithoutService.getDaysWithoutEntries();
  }

  private readonly handleResponse = (response: Array<DaysWithoutEntry>): daysWithoutActions.LoadSuccess => {
    return new daysWithoutActions.LoadSuccess(response);
  }
}
