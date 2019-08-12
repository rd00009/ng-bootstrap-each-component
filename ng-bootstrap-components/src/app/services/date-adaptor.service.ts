import { Injectable } from '@angular/core';
import { NgbDateAdapter,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DateAdaptorService implements NgbDateAdapter<string> {

  fromModel(value: string): NgbDateStruct {
      if(!value){
        return;
      }
      let segment = value.split('-');
      return{
        year: Number(segment[0]),
        month: Number(segment[1]),
        day:Number(segment[2])
      };
  }
  toModel(date: NgbDateStruct): string{
    return `${date.year}-${date.month}-${date.day}`;
  }
}