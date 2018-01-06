import { Component, OnInit, OnDestroy } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'home',
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit, OnDestroy {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  }
  
  public ngOnInit() {}
  
  public ngOnDestroy() {}
}
