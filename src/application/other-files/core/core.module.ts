import { NgModule, Optional, SkipSelf } from '@angular/core';

import { LoggerService } from './logger/logger.service';
import { ConsoleLoggerService } from './logger/console-logger.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService }
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}