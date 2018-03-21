import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../article-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles;
  constructor(private articleService: ArticleServiceService) {
  }
  getArticle() {
    this.articleService.getData().subscribe(data => {
      this.articles = data;
      console.log(this.articles);
    })
  }
  addLikes(curArt){
    curArt=curArt+1;
    this.articleService.updateArticle(curArt);
  }
  goToDetails(id){
    this.articleService.setDetailsId(id);
  }
  ngOnInit() {

    this.getArticle();
  }

}
