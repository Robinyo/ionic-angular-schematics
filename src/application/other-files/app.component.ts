import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoggerService } from '../core/logger/logger.service';

@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {

  rootPage:any = 'HomePage';

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private logger: LoggerService) {

    this.platformReady();
  }

  private platformReady() {
    this.platform.ready().then(() => {

      this.logger.info('MyApp: platform.ready()');

      if (this.platform.is('cordova')) {
        this.initPlugins();
      }
    });
  }

  private initPlugins() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
}
