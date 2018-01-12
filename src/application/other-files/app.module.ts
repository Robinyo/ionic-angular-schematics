import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyAppComponent } from '@app/app.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [MyAppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    IonicModule.forRoot(MyAppComponent, {
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyAppComponent],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
