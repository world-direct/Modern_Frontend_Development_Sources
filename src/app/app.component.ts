import { GithubService } from './shared/github.service';
import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app',
  templateUrl: 'app.template.html',
  styleUrls: ['app.style.less'],
  providers: [GithubService]

})
export class AppComponent {

  public name: string;

  constructor() {
    this.name = 'World-Direct';
  }
}
