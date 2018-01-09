import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoggerService } from '@core/logger/logger.service';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= dasherize(name) %>.component.html'
})
export class <%= classify(name) %>Component implements OnInit, OnDestroy {

  text: string;

  constructor(private logger: LoggerService) {

    this.text = 'Hello World';
  }

  public ngOnInit() {
    this.logger.info('<%= classify(name) %>Page: ngOnInit()');
  }

  public ngOnDestroy() {
    this.logger.info('<%= classify(name) %>Page: ngOnDestroy()');
  }
}
