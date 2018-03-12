import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class ArticlesService {

	private headers: any;

	constructor(private http: HttpClient) { }

	upvoteArticle(id: string) {
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/json');
		return this.http.put('http://universalmagazine.net/index-api/get/single/' + id + '/upvote', null, this.headers);
	}

	downvoteArticle(id: string) {
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/json');
		return this.http.put('http://universalmagazine.net/index-api/get/single/' + id + '/downvote', null, this.headers);
	}

	getArticles() {
		return this.http.get('http://universalmagazine.net/index-api/getArticles/12');
	}
}
