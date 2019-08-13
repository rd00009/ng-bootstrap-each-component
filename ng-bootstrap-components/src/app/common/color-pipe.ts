import { Pipe,PipeTransform  } from '@angular/core';

@Pipe({
    name:'colorpick'
})
export class ColorPipe implements PipeTransform {
    transform(value:string){
        if(value.startsWith('M')){
            return `${value} *`;
        }
        return value;
    }
}