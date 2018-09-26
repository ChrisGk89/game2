import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ImagesPage} from "../images/images";



@Component({
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor (public navCtrl: NavController){}

  iMagesPage(){
    this.navCtrl.push(ImagesPage);
  }

}
