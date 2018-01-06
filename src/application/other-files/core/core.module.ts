import { NgModule } from '@angular/core';

import { LoggerService } from './logger/logger.service';
import { ConsoleLoggerService } from './logger/console-logger.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService }
  ]
})
export class CoreModule {}