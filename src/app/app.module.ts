import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppHeaderComp } from './Components/Header/app.headercomp';
import { AppArticleTree } from './Components/ArticleTree/app.articletree';
import { AppArticleTabView } from './Components/Articles/app.articletabview';

import { Routing } from './app.routing';

import { DropdownModule }   from 'primeng/primeng';
import { TreeModule,TreeNode } from 'primeng/primeng';
import { TreeDragDropService } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { ToolbarModule } from 'primeng/primeng';
import { DataGridModule,PanelModule } from 'primeng/primeng';

//import { DragDropModule } from 'primeng/primeng';

import { ArticleTreeService } from './Services/ArticleTree/articletree.service';
//import { InMemoryDataService } from './Services/ArticleTree/articletreeinmemory.service';

@NgModule({
  imports: [    
    BrowserModule,
    HttpModule,
    JsonpModule,
    Routing,
    DropdownModule,
    BrowserAnimationsModule,
    TreeModule,    
    TabViewModule,
    ToolbarModule,
    DataGridModule,
    PanelModule
    //InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    AppHeaderComp,
    AppArticleTree,
    AppArticleTabView
  ], 
  providers: [TreeDragDropService,ArticleTreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
