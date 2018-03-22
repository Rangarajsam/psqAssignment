import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
articles;
  constructor(private articleService: ArticleServiceService) {
  }
  getArticle() {
    this.articleService.getData().subscribe(data => {
      this.articles = data;
      console.log(this.articles);
    })
  }


  goToDetails(id){
    this.articleService.setDetailsId(id);
  }

 

  ngOnInit() {

    this.getArticle();
  }
}
