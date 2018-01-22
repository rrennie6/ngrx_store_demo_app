import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {Observable} from 'rxjs/Observable';
import * as daysWithoutActions from '../actions/days_without';
import {DaysWithoutEntry} from '../models/days_without_entry';

@Component({
  selector: '[data-days-without-entry]',
  template: `
<div>
  <div *ngIf="entry.withOrWithout">
    Days with
  </div>
  <div *ngIf="!entry.withOrWithout">
    Days without
  </div>
  <div>
    {{ entry.goalName }}
  </div>
  <h1>
    {{ entry.days }}
  </h1>
  <div>
    <button (click)="resetCount(entry)">
      Reset Count
    </button>
  </div>
</div>
  `
})

export class DaysWithoutEntryComponent {
  @Input() entry: DaysWithoutEntry;
  constructor(private store: Store<State>) {}

  private resetCount(entry: DaysWithoutEntry): void {
    this.store.dispatch(new daysWithoutActions.Reset({entry: entry}))
  }
}
