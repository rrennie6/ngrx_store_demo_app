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
      .mergeMap(this.loadService)
      .map(this.handleLoadResponse);

  @Effect() saveDaysWithoutEntries = (): Observable<Action> =>
    this.actions
      .ofType(daysWithoutActions.SAVE)
      .mergeMap(this.saveService)
      .map(this.handleSaveResponse);

  @Effect() resetDaysWithoutEntries = (): Observable<Action> =>
    this.actions
      .ofType(daysWithoutActions.RESET)
      .mergeMap(this.resetService)
      .map(this.handleResetResponse);

  private readonly loadService = (action: Action): Observable<Array<DaysWithoutEntry>> => {
    return this.daysWithoutService.getDaysWithoutEntries();
  }

  private readonly saveService = (action: Action): Observable<DaysWithoutEntry> => {
    return this.daysWithoutService.saveEntry(action.payload.entry);
  }

  private readonly resetService = (action: Action): Observable<DaysWithoutEntry> => {
    return this.daysWithoutService.resetEntry(action.payload.goalName);
  }

  private readonly handleLoadResponse = (response: Array<DaysWithoutEntry>): daysWithoutActions.LoadSuccess => {
    return new daysWithoutActions.LoadSuccess({entries: response});
  }

  private readonly handleSaveResponse = (response: DaysWithoutEntry): Action => {
    return new daysWithoutActions.SaveSuccess({entry: response});
  }

  private readonly handleResetResponse = (response: DaysWithoutEntry): Action => {
    return new daysWithoutActions.ResetSuccess({goalName: response.goalName});
  }
}
