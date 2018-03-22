import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailedArticle;
  articleId;
  constructor(private articleService: ArticleServiceService, private backLocation:Location) {
  }
  getArticle() {
    this.articleService.getData().subscribe(data => {
      this.articleId = this.articleService.getDetailsId();
      this.detailedArticle = data[this.articleId];
      console.log(this.detailedArticle);
    })
  }
   goBack(){
    this.backLocation.back();
  }
  ngOnInit() {
    this.getArticle();
  }

}
