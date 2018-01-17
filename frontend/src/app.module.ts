import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Injectable} from '@angular/core';
import {HttpModule, BaseRequestOptions, RequestOptions} from '@angular/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AppRoutingProviders, Routing} from './routes';
import {DaysWithoutApp} from './components/days_without_app';
import {DaysWithoutComponent} from './components/days_without_component';
import {DaysWithoutEntryComponent} from './components/days_without_entry_component';
import {DaysWithoutService} from './services/days_without_service';
import {DaysWithoutEffects} from './effects/days_without';
import {reducer} from './reducers';

@NgModule({
  declarations: [
    DaysWithoutApp,
    DaysWithoutComponent,
    DaysWithoutEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    HttpModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(DaysWithoutEffects)
  ],
  providers: [
    AppRoutingProviders,
    HttpModule,
    DaysWithoutService
  ],
  exports: [BrowserModule, HttpModule],
  bootstrap: [DaysWithoutApp]
})
export class AppModule { }
