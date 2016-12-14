import { Component, OnInit } from '@angular/core';

@Component({

	selector: 'repo-search',
	templateUrl: 'repoSearch.component.html',
	styleUrls: ['repoSearch.component.less'],
	providers: []
})
export class RepoSearchComponent {
	constructor() {
	}

	public repoSearchText: string;	

	public searchChanged(event: string): void{
		console.log(event);
		this.repoSearchText = event;
	}


}