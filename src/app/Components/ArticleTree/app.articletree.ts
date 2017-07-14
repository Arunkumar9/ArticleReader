/**
 * This component will show a list of Article which are availble now for the review
 */

import { Component,OnInit } from '@angular/core';
import { AppConstants }     from '../../../assets/app.constants';
import { AppStringConstants } from '../../../assets/app.Stringconstants';

import { ArticleTreeService } from '../../Services/ArticleTree/articletree.service';

import { TreeModule,TreeNode } from 'primeng/primeng';

//import { ArticleTreeModel } from '../../Models/Articles/articlestree';

import { Router } from '@angular/router';

@Component({
    selector : 'app-articletree',
    templateUrl : './app.articletree.html',
    styleUrls : ['./app.articletree.css']
})

export class AppArticleTree implements OnInit{

    articles: TreeNode[];
    //articlesInMemory: ArticleTreeModel[];
    errorMessage: string;

    constructor(private articleTreeService: ArticleTreeService,private router:Router) {}

    ngOnInit(){
        //With JSON file data will be received
        this.getArticleTreeContent();

        //With Inmemory service data will be received.
        //this.getInMemoryArticles();               
    }

    getArticleTreeContent(){
        this.articleTreeService.getArticleTree()
                               .subscribe(articles => this.articles = articles, error =>  this.errorMessage = <any>error);
    }

    getInMemoryArticles(){
        //this.articleTreeService.getInMemoryArticles().then(articles => this.articles = articles, error =>  this.errorMessage = <any>error);
    }

    onArticleNodeDrop(event){
        var dragNode = event.dragNode;
        var dropNode = event.dropNode;
        if(dragNode != "" && dragNode != null && !dragNode){

        }
        return false;
    }

    onArticleNodeSelect(event){
        var node = event.node;
        //this will set the articles in to servives so the articletab component can get it from there.
        this.articleTreeService.setArticleTreeValues(this.articles);

        //We are redirecting the view to the article tab where it will show the 
        let link = ['/articleDetails',node.id];
		this.router.navigate(link);
    }
}