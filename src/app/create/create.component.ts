import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../article-service.service';
import {FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formData;
  formValues;
  constructor(private articleService: ArticleServiceService) { }

  ngOnInit() {
    this.formData=new FormGroup({
      description:new FormControl('Description'),
      tags:new FormControl('Category'),
      image:new FormControl('Image Url'),
      author:new FormControl('Author'),
      title:new FormControl('Title')
    });
  }

  onPublish(data) {
    this.formValues=data;
    //{"description": "x not Texts", "tags": ["xalle", "xalle 2"], "image": "no image", "author": "sdfsd", "title": "x not"}
    this.articleService.addArticle(this.formValues);
    console.log(this.formValues);
  }

}
