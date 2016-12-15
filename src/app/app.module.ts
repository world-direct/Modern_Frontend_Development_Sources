
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GithubService } from './shared/github.service';
import { AppComponent } from './app.component';
import { RepoSearchComponent } from './repoSearch/repoSearch.component';
import {RepositoryTileComponent} from './RepositoryTile/RepositoryTile.component';
import {RepoListComponent} from './repoList/repoList.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, ReactiveFormsModule],
  declarations: [AppComponent, RepoSearchComponent, RepoListComponent, RepositoryTileComponent],
  bootstrap: [AppComponent],
  providers: [GithubService]

})
export class AppModule { }
