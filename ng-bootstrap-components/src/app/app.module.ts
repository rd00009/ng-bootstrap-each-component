import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*third party imports*/
import {NgxLoadingModule} from 'ngx-loading';
import  {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { EntryeditorComponent } from './entryeditor/entryeditor.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutsApiService } from './workouts-api.service';
import  {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutsComponent,
    EntryeditorComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    NgbModule
  ],
  providers: [ WorkoutsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
