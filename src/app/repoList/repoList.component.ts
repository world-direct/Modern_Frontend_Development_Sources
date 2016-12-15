import {Repository} from '../shared/repository.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'repo-list',
	templateUrl: 'repoList.component.html',
	styleUrls: ['repoList.component.less']
})

export class RepoListComponent implements OnInit {

	@Input()
	public repositories : Repository[];

	ngOnInit() {
		this.repositories = new Array<Repository>();
	 }
}