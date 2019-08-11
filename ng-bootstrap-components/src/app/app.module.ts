import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*third party imports*/
import {NgxLoadingModule} from 'ngx-loading';
import  {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { EntryeditorComponent } from './entryeditor/entryeditor.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutsApiService } from './workouts-api.service';
import {CreateWorkoutComponent} from './workouts/workouts-inner-components/create-workout.component';

import { WorkerDetailComponent } from './workouts/workouts-inner-components/worker-detail-component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutsComponent,
    EntryeditorComponent,
    NavmenuComponent,
    WorkerDetailComponent,
    CreateWorkoutComponent
  ],  
  providers: [ WorkoutsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
