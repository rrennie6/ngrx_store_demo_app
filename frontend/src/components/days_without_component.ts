import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {Observable} from 'rxjs/Observable';
import * as daysWithoutActions from '../actions/days_without';
import * as newEntryActions from '../actions/new_entry';
import * as viewActions from '../actions/view';
import {DaysWithoutEntry} from '../models/days_without_entry';
import {selectDaysWithoutEntries} from '../selectors/days_without';
import * as newEntrySelectors from '../selectors/new_entry';
import * as viewSelectors from '../selectors/view';

@Component({
  selector: 'days-without',
  styles: [`
    .entry {
      display: inline-block;
      padding: 0.5em;
      text-align: center;
      font-size: 2em;
      border: 5px solid black;
      min-width: 10em;
      max-width: 10em;
      min-height: 10em;
      max-height: 10em;
      margin: 0.5em;
    }
  `],
  template: `
<div>
  <button (click)="setSavePanelOpen(true)">
    Add New
  </button>
  <button *ngIf="(addingNewEntry | async)" (click)="saveNewEntry()">
    Save
  </button>
</div>
<div *ngIf="(addingNewEntry | async)">
  <div>
    <input (input)="setDays($event.target.value)">Days so far
  </div>
  <div>
    <input type="radio"
           (click)="setWithOrWithout($event.target.value)"
           name="options"
           ngControl="options"
           [value]="true">With
    <input type="radio"
           (click)="setWithOrWithout($event.target.value)"
           name="options"
           ng-control="options"
           [value]="false">Without
  </div>
  <div>
    <input (input)="setGoalName($event.target.value)">Goal Name
  </div>
</div>
<div *ngFor='let entry of (daysWithoutEntries | async)'
     data-days-without-entry
     class="entry"
     [entry]='entry'>
</div>
  `
})

export class DaysWithoutComponent {
  private daysWithoutEntries: Observable<Array<DaysWithoutEntry>>;
  private addingNewEntry: Observable<boolean>;
  private days: Observable<number>;
  private withOrWithout: Observable<boolean>;
  private goalName: Observable<string>;

  constructor(private store: Store<State>) {
    this.store.dispatch(new daysWithoutActions.Load);
    this.setSavePanelOpen(false);
    this.daysWithoutEntries = selectDaysWithoutEntries(this.store);
    this.addingNewEntry = viewSelectors.selectSavePanelOpen(this.store);
    this.days = newEntrySelectors.selectDays(this.store);
    this.withOrWithout = newEntrySelectors.selectWithOrWithout(this.store);
    this.goalName = newEntrySelectors.selectGoalName(this.store);
  }

  private setDays(days: number) {
    this.store.dispatch(new newEntryActions.SetDays({days: +days}));
  }

  private setWithOrWithout(withOrWithout: boolean) {
    this.store.dispatch(new newEntryActions.SetWithOrWithout({withOrWithout: withOrWithout}));
  }

  private setGoalName(goalName: string) {
    this.store.dispatch(new newEntryActions.SetGoalName({goalName: goalName}));
  }

  private setSavePanelOpen(savePanelOpen: boolean): void {
    this.store.dispatch(new viewActions.SetSavePanelOpen({savePanelOpen: savePanelOpen}));
  }

  private saveNewEntry(): void {
    this.store.dispatch(new newEntryActions.Save());
    this.setSavePanelOpen(false);
  }
}
