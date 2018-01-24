import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {State} from '../reducers';
import {Observable} from 'rxjs/Observable';
import {Effect, Actions} from '@ngrx/effects';
import * as newEntryActions from '../actions/new_entry';
import {DaysWithoutService} from '../services/days_without_service';
import {DaysWithoutEntry} from '../models/days_without_entry';
import * as newEntrySelectors from '../selectors/new_entry';

@Injectable() export class NewEntryEffects {
  constructor(
    private actions: Actions,
    private daysWithoutService: DaysWithoutService,
    private store: Store<State>
  ) { }

  @Effect() saveDaysWithoutEntries = (): Observable<Action> =>
    this.actions
      .ofType(newEntryActions.SAVE)
      .mergeMap(this.buildEntry)
      .mergeMap(this.callService)
      .map(this.handleSaveResponse);

  private readonly buildEntry = ():Observable<DaysWithoutEntry> => {
    return newEntrySelectors.selectGoalName(this.store).combineLatest(
      newEntrySelectors.selectDays(this.store),
      newEntrySelectors.selectWithOrWithout(this.store)
    ).first()
     .map((values: any) => {
       const [goalName, days, withOrWithout]: [string, number, boolean] = values;
       return new DaysWithoutEntry(goalName, days, withOrWithout);
     });
  }

  private readonly callService = (entry: DaysWithoutEntry): Observable<DaysWithoutEntry> => {
    return this.daysWithoutService.saveEntry(entry);
  }

  private readonly handleSaveResponse = (response: DaysWithoutEntry): Action => {
    return new newEntryActions.SaveSuccess({entry: response});
  }
}
