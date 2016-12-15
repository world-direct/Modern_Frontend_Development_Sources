import { FormControl } from '@angular/forms';
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

	public repoSearchFormControl = new FormControl();

	public searchResult: Repository[];

	public ngOnInit(): void {

		this.repoSearchFormControl.valueChanges
			.debounceTime(250)			
			.distinctUntilChanged()
			.switchMap(term => this.githubService.findRepos(term))
			.subscribe(
			repositories => {
				this.searchResult = repositories;
				console.log(`Repos found: ${repositories.length}`);
			},
			onerror => console.log(`Error occured ${onerror.message}`));
	}



}