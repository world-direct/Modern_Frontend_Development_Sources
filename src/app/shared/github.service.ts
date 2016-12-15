import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Repository } from './repository.model';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    constructor(private http: Http) {
     }

    public findRepos(searchKey: string): Observable<Repository[]> {

        if (!searchKey) {
            // return Observable.create((observer: Observer<Repository[]>) => observer.next(new Array<Repository>()), () => { }, () => { });
            return Observable.of(new Array<Repository>());        
        }
 
        let params = this.githubParams;
        params.set('q', searchKey);

        let url: string = `https://api.github.com/search/repositories?q={searhKey}`;
        return this.http.get(url, { search: params })
            .map((res) => {
                var repos = new Array<Repository>();
                for (let repoResult of res.json().items) {
                    repos.push(<Repository>{
                        description: repoResult.description,
                        forksCount: repoResult.forks_count,
                        name: repoResult.name,
                        owner: repoResult.owner.login,
                        ownerAvatarUrl: repoResult.owner.avatar_url,
                        watchersCount: repoResult.watchers_count,
                        repositoryUrl: repoResult.html_url
                    });
                }
                return repos;
            });
    }


    private get githubParams(): URLSearchParams {
        let params = new URLSearchParams();
        params.set('access_token', '697e181e5049dbfedba826ba4289b7e82971fdf2');
        return params
    }
} 