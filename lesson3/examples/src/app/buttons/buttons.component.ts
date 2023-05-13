import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;
   buttonLocation: string = "left";

   constructor() { }

   ngOnInit() { }

   activateAndInactiveButtons(){
      this.inactiveGold = !this.inactiveGold;
      this.inactiveSilver = !this.inactiveSilver;
      this.inactiveCopper = !this.inactiveCopper;
   }

   moveButton(oldLocation: string){
      while(this.buttonLocation === oldLocation){
         this.buttonLocation = ["left", "right", "center"][Math.floor(Math.random()*3)]
      }
      return this.buttonLocation
   }

}
