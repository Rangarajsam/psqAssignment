import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule } from '@angular/forms';

import { ArticleServiceService } from './article-service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'popular',
        component:PopularComponent
      },
      {
        path:'details',
        component:DetailsComponent
      },
      {
        path:'create',
        component:CreateComponent
      }
    ])
  ],
  providers: [ArticleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
