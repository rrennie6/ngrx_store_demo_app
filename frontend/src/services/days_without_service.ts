import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DaysWithoutEntry} from '../models/days_without_entry';

@Injectable()
export class DaysWithoutService {
  static RETRIEVAL_URL: string = '/days_without';
  static SAVE_URL: string = '/days_without/new';
  static RESET_URL: string = '/days_without/reset';
  static DELETE_URL: string = '/days_without/delete';

  constructor(public http: Http) {}

  getDaysWithoutEntries(): Observable<Array<DaysWithoutEntry>> {
    return this.http.request(DaysWithoutService.RETRIEVAL_URL)
      .map((response: Response) => this.jsonToDaysWithoutEntries(response.json()));
  }

  saveEntry(entry: DaysWithoutEntry): Observable<any> {
    return this.http.post(DaysWithoutService.SAVE_URL, entry)
      .map((response: Response) => this.jsonToDaysWithoutEntry(response.json()));
  }

  resetEntry(goalName: string): Observable<any> {
    return this.http.post(DaysWithoutService.RESET_URL, {goalName: goalName})
      .map((response: Response) => null);
  }

  deleteEntry(goalName: string): Observable<any> {
    return this.http.post(DaysWithoutService.DELETE_URL, {goalName: goalName})
      .map((response: Response) => null);
  }

  private jsonToDaysWithoutEntry(json: any): DaysWithoutEntry {
    return new DaysWithoutEntry(json.goal_name,
                                json.days,
                                json.with_or_without)
  }

  private jsonToDaysWithoutEntries(json: any): Array<DaysWithoutEntry> {
    return json.map((entry: any) => {
      return new DaysWithoutEntry(entry.goal_name,
                                  entry.days,
                                  entry.with_or_without)
    });
  }
}
