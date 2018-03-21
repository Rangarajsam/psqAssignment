import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ArticleServiceService {

  private articleUrl = 'http://test.peppersquare.com/api/v1/article';
  articleList: any = {};
  details;
  constructor(private http: Http) {
  }

  getData() {
    return this.http.get(this.articleUrl)
      .map((res: Response) => res.json())
  }
  addArticle(data) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.articleUrl, data, options).toPromise()
	           .then(this.extractData)
             .catch(this.handleErrorPromise);
    }
  updateArticle(data) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.articleUrl+'/'+data.id, data, options).toPromise()
	           .then(this.extractData)
             .catch(this.handleErrorPromise);
    }
    getDetailsId(){
      return this.details;
    }
    setDetailsId(dNum){
      this.details=dNum;
    }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body || {});
    //return body || {};
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    //return Promise.reject(error.message || error);
  }
}
