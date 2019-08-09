import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WorkoutsApiService } from '../workouts-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkoutsComponent implements OnInit {
  public workouts = [];
  public loading = false;  

  constructor(private api: WorkoutsApiService) { }

  ngOnInit() {
  
      // this.loading = true;
      // this.api.getWorkouts().subscribe(data=> {
      //     this.workouts = data;
      //     this.loading=false;
      // });
  
  } 
}