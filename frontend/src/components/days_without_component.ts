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
    .inline--block {
      display: inline-block;
    }

    .padding {
      padding: 1em;
    }
  `],
  template: `
<div *ngFor='let entry of (daysWithoutEntries | async)'
     data-days-without-entry
     class="inline--block padding"
     [entry]='entry'>
</div>
  `
})

export class DaysWithoutComponent {
  private daysWithoutEntries: Observable<Array<DaysWithoutEntry>>;

  constructor(private store: Store<State>) {
    this.store.dispatch(new daysWithoutActions.Load);
    this.daysWithoutEntries = selectDaysWithoutEntries(this.store);
    selectDaysWithoutEntries(this.store).subscribe(stuff => console.log(stuff));
  }
}
