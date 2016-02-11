import {Component} from 'angular2/core';

import {SELECT_DIRECTIVES} from 'ng2-select';

@Component({
  selector: 'my-select',
  directives: [SELECT_DIRECTIVES],
  template: `
    <h3>Select a hero</h3>
    <ng-select></ng-select>
    `
})

export class SelectComponent { 

}



