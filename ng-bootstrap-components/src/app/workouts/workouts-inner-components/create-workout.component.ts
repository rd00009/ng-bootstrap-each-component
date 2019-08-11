import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import {NgForm } from '@angular/forms';
@Component({
    selector: 'create-event',
    templateUrl: './create-workout.component.html'

})
export class CreateWorkoutComponent {
    SuccessMessage: string;
    IsSaved: boolean = false;

    perfection:any;
    city:any;
    name:any;
    eventdescription:any;

    constructor(private toastr: ToastrService,private routing:Router) { }

    
    SaveForm(fromValues) {
        this.IsSaved = true;
        console.log(fromValues);
        //this.SuccessMessage='Form is saved';
        this.toastr.success('Form data is saved!!!', 'Successfull');
    }
    CancelForm() {
        this.IsSaved = false;
        //this.SuccessMessage  ='Form is cancelled';
        this.toastr.error('Some error has occured!!', 'Error');
        this.routing.navigate(['events']);
    }
}