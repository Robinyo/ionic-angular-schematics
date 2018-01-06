import { Component, OnInit, OnDestroy } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: '<%= dasherize(name) %>'
})
@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.page.html'
})
export class <%= classify(name) %>Page implements OnInit, OnDestroy {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  }

  public ngOnInit() {}

  public ngOnDestroy() {}
}
