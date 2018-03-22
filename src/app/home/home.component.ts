import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../article-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles;
  loaderImg;
  constructor(private articleService: ArticleServiceService) {
  }
  getArticle() {
    this.articleService.getData().subscribe(data => {
      this.articles = data;
      this.loaderImg=false;
      console.log(this.articles);
    });
  }
  goToDetails(id){
    this.articleService.setDetailsId(id);
  }
  ngOnInit() {
    this.loaderImg=true;
    this.getArticle();
  }

}
