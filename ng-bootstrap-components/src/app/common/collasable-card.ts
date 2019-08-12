import { Component } from "@angular/core";

@Component({
  selector: "collasable-card",
  templateUrl: "./collasable-card.html",
  styles:[".card-header {cursor:pointer;}"]
})
export class CollasableCardComponent {
  IsBodyExpanded: boolean = true;
  handleToggle() {
    this.IsBodyExpanded = !this.IsBodyExpanded;
  }
}
