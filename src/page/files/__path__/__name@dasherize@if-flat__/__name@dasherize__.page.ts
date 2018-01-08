import { Component, OnInit, OnDestroy } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoggerService } from '@core/logger/logger.service';

@IonicPage({
  segment: '<%= dasherize(name) %>'
})
@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.page.html'
})
export class <%= classify(name) %>Page implements OnInit, OnDestroy {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private logger: LoggerService) {

  }

  public ngOnInit() {
    this.logger.info('<%= classify(name) %>Page: ngOnInit()');
  }

  public ngOnDestroy() {
    this.logger.info('<%= classify(name) %>Page: ngOnDestroy()');
  }
}
