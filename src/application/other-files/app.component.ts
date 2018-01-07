/**
 * The Application component for MyApp.
 */

import { ENV } from '@env';

import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoggerService } from '@core/logger/logger.service';

let isDebugMode = ENV.isDebugMode;

@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {

  public rootPage:any = 'HomePage';

  public theme: String = 'facebook-messenger-theme';

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private logger: LoggerService) {

    this.platformReady();
  }

  private platformReady() {

    this.getPlatformInfo();

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

  public toggleTheme() {

    this.logger.info('MyApp: toggleTheme()');

    if (this.theme === 'facebook-messenger-theme') {
      this.theme = 'green-and-blue-theme';
    } else {
      this.theme = 'facebook-messenger-theme';
    }
  }

  // https://ionicframework.com/docs/api/platform/Platform/

  private getPlatformInfo() {

    if (isDebugMode) {

      if (this.platform.is('mobileweb') || this.platform.is('core')) {
        this.logger.info('The Application is running in a browser');
      } else {
        this.logger.info('The Application is running on a device');
      }

      if (this.platform.is('ios')) {
        this.logger.info('The Platform is iOS');
      } else if (this.platform.is('android')) {
        this.logger.info('The Platform is Android');
      } else if (this.platform.is('windows')) {
        this.logger.info('The Platform is Windows');
      }
    }
  }
}
