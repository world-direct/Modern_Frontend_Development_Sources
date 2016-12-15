import { Repository } from '../shared/repository.model';
import { GithubService } from '../shared/github.service';
import { Component, OnInit, } from '@angular/core';

@Component({

	selector: 'repo-search',
	templateUrl: 'repoSearch.component.html',
	styleUrls: ['repoSearch.component.less'],
	providers: [GithubService]
})
export class RepoSearchComponent implements OnInit {
	constructor(private githubService: GithubService) {
	}

	public repoSearchText: string = "Angular2"

	public searchResult: Repository[];

	public searchChanged(event: string): void {
		console.log(event);
		this.repoSearchText = event;
		this.searchRepos();
	}

	public ngOnInit(): void {
		this.searchRepos();
	}


	private searchRepos(): void {
		this.githubService
			.findRepos(this.repoSearchText)			
			.subscribe((repositories) => {
				this.searchResult = repositories;
			});
	}

}