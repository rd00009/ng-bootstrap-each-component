import { Component } from '@angular/core';

@Component({
  selector: 'app-formcontrols',
  templateUrl: './formcontrols.component.html',
  styleUrls: ['./formcontrols.component.css']
})
export class FormcontrolsComponent {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
