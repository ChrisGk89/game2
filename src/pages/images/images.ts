import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'images.html',
})
export class ImagesPage {

  constructor(private modalCtrl: ModalController,
              private navCtrl: NavController) {}



  onSubmit(form: NgForm) {
    let submit = {
      title: form.value.title,
      body: form.value.body,
    };
  }
}
