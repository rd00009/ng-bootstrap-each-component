import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
    templateUrl: './create-event-component.html'
})
export class CreateEventComponent {

    SuccessMessage: string;
    IsSaved: boolean = false;

    constructor(private toastr:ToastrService,private routing:Router){}

    perfection: FormControl = new FormControl('', Validators.required);
    city: FormControl = new FormControl('', Validators.required);
    name: FormControl = new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*")]);
    eventdescription: FormControl = new FormControl('', Validators.required);

    eventForm: FormGroup = new FormGroup({
        perfection: this.perfection,
        city: this.city,
        name: this.name,
        eventdescription: this.eventdescription
    });

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