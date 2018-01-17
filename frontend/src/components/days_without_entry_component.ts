import {Component, Input} from '@angular/core';
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
</div>
  `
})

export class DaysWithoutEntryComponent {
  @Input() entry: DaysWithoutEntry;
  constructor() {}
}
