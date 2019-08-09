import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { EntryeditorComponent } from './entryeditor/entryeditor.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'workouts',component:WorkoutsComponent},
{path:'workouts/:id',component:EntryeditorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
