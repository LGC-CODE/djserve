import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

	private articlesSubscription;
	public articles: object;

	constructor(private articlesService: ArticlesService) { }

	ngOnInit() {
		this.articlesSubscription = this.articlesService.getArticles().subscribe(
			articles => {
				console.log(articles, 'articles?');
				this.articles = articles.map(
					art =>{
						art.isLiked = window.localStorage[art._id] ? true : false;
						console.log(window.localStorage[art._id]);
						return art;
					}
				)
			}
		);
	}

	ngOnDestroy() {
		this.articlesSubscription.unsubscribe();
	}

	public upvoteArticle(article) {
		this.articlesService.upvoteArticle(article._id).subscribe(
			response => {
				article.upvotes += 1;
				window.localStorage[article._id] = true;
				console.log(article.isLiked, 'liked? upvoted', window.localStorage[article._id]);
			}
		);
	}

	public downvoteArticle(article) {
		this.articlesService.downvoteArticle(article._id).subscribe(
			response => {
				article.upvotes -= 1;
				window.localStorage[article._id] = '';
				console.log(article.isLiked, 'liked? downvoted', window.localStorage[article._id]);
			}
		);
	}

}
