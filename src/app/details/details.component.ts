import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailedArticle;
  articleId;
  constructor(private articleService: ArticleServiceService) {
  }
  getArticle() {
    this.articleService.getData().subscribe(data => {
      this.articleId = this.articleService.getDetailsId();
      this.detailedArticle = data[this.articleId];
      console.log(this.detailedArticle);
    })
  }

  ngOnInit() {
    this.getArticle();
  }

}
