import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { EntryeditorComponent } from './entryeditor/entryeditor.component';
import { CreateWorkoutComponent } from './workouts/workouts-inner-components/create-workout.component';


const routes: Routes = [{ path: '',redirectTo:'/home', pathMatch:'full' },
{ path: 'home', component: HomeComponent },
{ path: 'events', component: WorkoutsComponent},
{ path: 'create-event', component: CreateWorkoutComponent},
{ path: 'events/:id', component: EntryeditorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
