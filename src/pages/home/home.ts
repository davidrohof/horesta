import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response, Headers } from '@angular/http';
import { BrowseEntities } from '../../app/components/browse-entities/browse-entities.component';
import { AddRecipeComponent } from '../../app/components/add-recipe/add-recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dishes = [
  {
    "id": 1,
    "name": "Kylling i sovs",
    "childs": [ "Kylling", "sovs" ]
  }, {
    "id": 2,
    "name": "Thaibox",
    "childs": [ "Thai", "Box" ]
  }, {
      "id": 3,
      "name": "Stegt Flæsk",
      "childs": [ "Flæsk", "persille" ]
    }
  ];

  constructor(
    public navCtrl: NavController,
    public http: Http
    ) {

  }

  search(event) {
    let nutritionEntities = this.dishes;
    if(event.target.value && event.target.value.length >= 3) {
      //console.log(event.target.value);
      this.searchArray();
    }
  }

  searchArray() {

  }

  browseEntities() {
    console.log('Opening add recipe view');
    this.navCtrl.push(AddRecipeComponent, {

    });
    // TODO: add error handling (promise)
  }

}
