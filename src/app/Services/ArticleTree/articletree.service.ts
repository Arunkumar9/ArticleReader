import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppURL } from '../../../assets/app.AppURLs';

import {TreeModule,TreeNode} from 'primeng/primeng';

import { ArticleTreeModel } from '../../Models/Articles/articlestree';
import { SwitchViews } from '../../Models/Articles/switchviews';


@Injectable()
export class ArticleTreeService {
    private articleTreeUrl = AppURL.ArticleTreeURL;
    private switchViewUrl = AppURL.SwitchViewURL;
    private articleInMemoryUrl = 'api/articles';
    private treeValues:TreeNode[];

    constructor (private http: Http) {}


    getArticleTree(): Observable<TreeNode[]>{
        return this.http.get(this.articleTreeUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    // getInMemoryArticles(): Promise<TreeNode[]>{
	// 	return this.http.get(this.articleInMemoryUrl)
    //                     .toPromise()
    //                     .then(this.inMemoryExtractData)
    //                     .catch(this.handleError);
	// }

    private extractData(res: Response) {
        let body = res.json();
        return body.Data || { };
    }

    private inMemoryExtractData(response: Response) {
        let body = response.json();
        let data = body.data as ArticleTreeModel[] || { };       

        return body.data as ArticleTreeModel[] || { };
    }

    setArticleTreeValues(treeValues:TreeNode[]){
        this.treeValues = treeValues;
    }

    getArticleTreeValues():TreeNode[]{
        return this.treeValues;
    }

    //This part of the code is for the swith view in articles.
    getSwitchViews(): Observable<SwitchViews[]>{
        return this.http.get(this.switchViewUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        //TODO: need to learn how to use the angular logging mechanisum

        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}