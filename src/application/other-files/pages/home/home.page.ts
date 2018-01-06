import { Component, OnInit, OnDestroy } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoggerService } from '@core/logger/logger.service';

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
              public navParams: NavParams,
              private logger: LoggerService) {

  }
  
  public ngOnInit() {
    this.logger.info('HomePage: ngOnInit()');
  }
  
  public ngOnDestroy() {
    this.logger.info('HomePage: ngOnDestroy()');
  }
}
