import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pom Pictures';
  image1 = '../assets/lu.png';
  image2 = '../assets/LacySource4.png';
  image3 = '../assets/NewDogSource.jpg';

  constructor() { }

  ngOnInit() {
  }

}