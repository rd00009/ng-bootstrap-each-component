import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

declare let toastr
@Component({
    selector: 'workout-detail',
    templateUrl: './worker-detail-component.html',
    styles:['.btn:pointer:cursor']
})
export class WorkerDetailComponent {   
    @Input() event: any;
    @Output() handleWorkerDetail = new EventEmitter<string>();
    IsBodyExpanded : boolean = false;
    constructor(private toastr: ToastrService){

    }
    handleCardAction(calledfrom:string='') {        
        //this.toastr.success(this.event.id,this.event.type);
        //this.toastr.error(this.event.id,this.event.type);
        this.toastr.warning(calledfrom +''+this.event.id,this.event.type);
        this.handleWorkerDetail.emit(this.event.id);       
    }

    handleToggle(){
            this.IsBodyExpanded = !this.IsBodyExpanded;
    }
}
