import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {CategoriesPage} from "../categories/categories";
import {InAppBrowser,InAppBrowserOptions} from "@ionic-native/in-app-browser";

@Component({
  templateUrl: 'intro.html',
})
export class IntroPage {

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };

  constructor (public platform: Platform, public navCtrl: NavController, private iab: InAppBrowser){}

  cAtegoriesPage(){
    this.navCtrl.push(CategoriesPage);
  }

  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.iab.create(url,target,this.options);
  }


}

