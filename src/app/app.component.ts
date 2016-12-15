import { GithubService } from './shared/github.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.less'],
  providers: [GithubService]

})
export class AppComponent {

  public name: string;

  constructor() {
    this.name = 'World-Direct';
  }
}
