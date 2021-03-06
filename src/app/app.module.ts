import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MusixmatchService} from './musixmatch/musixmatch.service';
import {LogService} from './log/log.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JsonParseBugInterceptor} from "./musixmatch/json-parse-bug-interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LyracloudStyleModule} from "./style/lyracloud-style.module";
import {TrackListItemComponent} from './musixmatch/track-list-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {D3cloudService} from "./d3cloud.service";

@NgModule({
  declarations: [
    TrackListItemComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LyracloudStyleModule
  ],
  providers: [
    LogService,
    {provide: HTTP_INTERCEPTORS, useClass: JsonParseBugInterceptor, multi: true},
    D3cloudService,
    MusixmatchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
