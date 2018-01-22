import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {Observable} from 'rxjs/Observable';
import * as daysWithoutActions from '../actions/days_without';
import {DaysWithoutEntry} from '../models/days_without_entry';
import {selectDaysWithoutEntries} from '../selectors/days_without';

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
  <button (click)="toggleAddNewPanel()">
    Add New
  </button>
  <button *ngIf="addingNewEntry" (click)="saveNewEntry()">
    Save
  </button>
</div>
<div *ngIf="addingNewEntry">
  <div>
    <input [(ngModel)]='days'>Days so far
  </div>
  <div>
    <input type="radio" [(ngModel)]='withOrWithout' name="true" [value]="true">With
    <input type="radio" [(ngModel)]='withOrWithout' name="false" [value]="false">Without
  </div>
  <div>
    <input [(ngModel)]='goalName'>Goal Name
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
  private addingNewEntry: boolean = false;
  private days: number = 0;
  private withOrWithout: boolean = false;
  private goalName: string = '';

  constructor(private store: Store<State>) {
    this.store.dispatch(new daysWithoutActions.Load);
    this.daysWithoutEntries = selectDaysWithoutEntries(this.store);
  }

  private toggleAddNewPanel(): void {
    this.addingNewEntry = !this.addingNewEntry;
  }

  private saveNewEntry(): void {
    const entry = new DaysWithoutEntry(
      this.goalName,
      this.days,
      this.withOrWithout
    );
    this.store.dispatch(new daysWithoutActions.Save({entry: entry}));
    this.toggleAddNewPanel();
  }
}
