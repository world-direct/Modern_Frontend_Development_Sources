import {Repository} from '../shared/repository.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'repository-tile',
	templateUrl: 'repositoryTile.component.html',
	styleUrls: ['repositoryTile.component.less']
})

export class RepositoryTileComponent implements OnInit {

	@Input()
	public repository : Repository;
	ngOnInit() { }
}