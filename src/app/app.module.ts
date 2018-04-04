import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SimpleHttpServiceComponent } from './simple-http-service/simple-http-service.component';
import { F1SimpleServicerService } from './f1-simple-servicer.service';
import { BetterHttpServiceComponent } from './better-http-service/better-http-service.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpServiceComponent,
    BetterHttpServiceComponent
  ],
  imports: [
	BrowserModule,
	HttpModule
  ],
  providers: [F1SimpleServicerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
