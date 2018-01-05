import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { <%= classify(name) %>Page } from './<%= dasherize(name) %>.page';

@NgModule({
  declarations: [<%= classify(name) %>Page],
  imports: [
    IonicPageModule.forChild(<%= classify(name) %>Page)
  ]
})
export class <%= classify(name) %>PageModule {}