import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
petName = 'chihuahua';
petImage = 'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/139/209/476463479.jpg';
  constructor() { }
updateName(name) {
  this.petName = name;
}

  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit() {
  }

}
