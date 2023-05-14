import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = false;

  handleTakeOff(image) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
      let movement = parseInt(image.style.bottom) + 200 + 'px'
      image.style.bottom = movement
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = true;
    }
 }
 
 handleLand(image){
  let result = window.confirm('Are you sure you want to land?');
  if(result){
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed.';
    image.style.bottom = 0 + 'px';
    this.takeOffEnabled = false;
  }
 }

 handleAbort(image){
  let result = window.confirm('Are you sure you want to abort this mission?');
  if(result){
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'This mission has been aborted.';
    image.style.bottom = 0 + 'px';
    this.takeOffEnabled = false;
  }
 }

 moveRocket(image, direction){
  if(direction === 'right'){
    let movement = parseInt(image.style.left) + 10 + 'px';
    image.style.left = movement;
    this.width = this.width + 10000;
  }

  if(direction === 'left'){
    let movement = parseInt(image.style.left) - 10 + 'px';
    image.style.left = movement;
    this.width = this.width - 10000;
  }

  if(direction === "up"){
    this.height += 10;
    let movement = parseInt(image.style.bottom) + 10 + 'px';
    image.style.bottom = movement
  }

  if(direction === 'down'){
    this.height -= 10;
    let movement = parseInt(image.style.bottom) - 10 + 'px';
    image.style.bottom = movement
  }
  this.marginCheck(this.width, this.height)

 }

 marginCheck(width, height) {
  if (width > 260000 || width < 0 || height < 0 || height > 10080) {
    this.color = 'orange';
  } else {
    this.color = 'blue';
  }
}

}
