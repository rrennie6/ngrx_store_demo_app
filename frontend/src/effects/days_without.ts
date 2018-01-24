import {Injectable} from '@angular/core';
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
      .mergeMap(this.loadService)
      .map(this.handleLoadResponse);

  @Effect() resetDaysWithoutEntry = (): Observable<Action> =>
    this.actions
      .ofType(daysWithoutActions.RESET)
      .mergeMap(this.resetService)
      .map(this.handleResetResponse);

  @Effect() deleteDaysWithoutEntry = (): Observable<Action> =>
    this.actions
      .ofType(daysWithoutActions.DELETE)
      .mergeMap(this.deleteService)
      .map(this.handleDeleteResponse);

  private readonly loadService = (action: Action): Observable<Array<DaysWithoutEntry>> => {
    return this.daysWithoutService.getDaysWithoutEntries();
  }

  private readonly resetService = (action: Action): Observable<DaysWithoutEntry> => {
    return this.daysWithoutService.resetEntry(action.payload.goalName);
  }

  private readonly deleteService = (action: Action): Observable<any> => {
    return this.daysWithoutService.deleteEntry(action.payload.goalName);
  }

  private readonly handleLoadResponse = (response: Array<DaysWithoutEntry>): daysWithoutActions.LoadSuccess => {
    return new daysWithoutActions.LoadSuccess({entries: response});
  }

  private readonly handleResetResponse = (response: DaysWithoutEntry): Action => {
    return new daysWithoutActions.ResetSuccess({goalName: response.goalName});
  }

  private readonly handleDeleteResponse = (response: any): Action => {
    return new daysWithoutActions.DeleteSuccess({goalName: response.goalName});
  }
}
