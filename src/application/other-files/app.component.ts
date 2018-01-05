import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {

  rootPage:any = 'HomePage';

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {

    this.platformReady();
  }

  private platformReady() {
    this.platform.ready().then(() => {
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
