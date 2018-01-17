import {ActivatedRoute} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'days-without-app',
  providers: [],
  template: '<router-outlet></router-outlet>'
})
export class DaysWithoutApp {
  constructor(route: ActivatedRoute) {}
}
