import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepoSearchComponent } from './repoSearch/repoSearch.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, RepoSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
  