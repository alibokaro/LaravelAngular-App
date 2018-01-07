import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule }   from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {ListService} from './service/list.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'enter google map apiKey'
    })
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
