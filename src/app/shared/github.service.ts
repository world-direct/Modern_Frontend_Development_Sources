import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    constructor(private http: Http) { }

    public findRepos(searchKey: string): any {
        let params = new URLSearchParams();
        params.set('q', searchKey);

        let url: string = `https://api.github.com/search/repositories?q={searhKey}`;
        return this.http.get(url, { search: params })
            .map((res) => res.json());
    }
}