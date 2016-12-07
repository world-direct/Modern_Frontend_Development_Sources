import { Component } from '@angular/core';

@Component({
  selector: 'say-hello',
  templateUrl: 'hello.template.html', 
  styleUrls: ['hello.style.less']
})
export class HelloComponent {

  public name: string;

  constructor() {
    this.name = 'World-Direct';
  }
}
