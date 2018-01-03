import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.page.html'
})
export class <%= classify(name) %>Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  // public ionViewDidLoad() {}
}
