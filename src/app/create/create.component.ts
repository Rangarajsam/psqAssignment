import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../article-service.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formData;
  formValues;
  successMsg;
  failureMsg;
  constructor(private articleService: ArticleServiceService) { }

  ngOnInit() {
    this.formData=new FormGroup({
      description:new FormControl('', Validators.compose([Validators.required])),
      tags:new FormControl('', Validators.compose([Validators.required])),
      image:new FormControl(''),
      author:new FormControl('', Validators.compose([Validators.required])),
      title:new FormControl('', Validators.compose([Validators.required]))
    });
  }

  onPublish(data) {
    this.formValues=data;
    //{"description": "x not Texts", "tags": ["xalle", "xalle 2"], "image": "no image", "author": "sdfsd", "title": "x not"}
    this.formValues.tags=(this.formValues.tags).split(',');
    console.log(this.formValues.tags);
    this.articleService.addArticle(this.formValues)
    .then(showMsg => {
      this.successMsg=true;
      setTimeout(() => {
        this.successMsg=false;
      },4000);
    },() => {
      this.failureMsg=true;
      setTimeout(() => {
        this.failureMsg=false;
      },4000);
    });
    console.log(this.formValues);
    this.formData.reset();
  }

}
