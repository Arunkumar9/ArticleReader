/**
 * Two-way value binding is defined using ngModel and dropdown requires a collection of options where each option 
 * should follow the SelectItem interface that defines label-value properties.
 */

import { Component,OnInit }        from '@angular/core';
import { AppConstants }     from '../../../assets/app.constants';
import { AppStringConstants } from '../../../assets/app.Stringconstants';


import { HeaderService } from '../../Services/Header/header.service';

import { SelectItem } from 'primeng/primeng';

@Component({
    selector : 'app-header',
    providers:[HeaderService],
    templateUrl : './app.headercomp.html',
    styleUrls : ['./app.headercomp.css']    
})

export class AppHeaderComp implements OnInit {
    title = AppConstants.AppName;
    themePlaceHolder = AppStringConstants.ThemePlaceHolders;
    languagePlaceHolder = AppStringConstants.LanguagePlaceHolders

    errorMessage: string;
    themes: SelectItem[];
    languages: SelectItem[];

    selectedTheme: string;
    selectedLanguage: string;

    headerImgSrc:string;
    headerImgSrcHeight:string;
    headerImgSrcWidth:string;

    constructor(private headerService:HeaderService){
        this.headerImgSrc = AppConstants.HeaderImgSrc;
        this.headerImgSrcHeight = AppConstants.HeaderImgSrcHeight;
        this.headerImgSrcWidth  = AppConstants.HeaderImgSrcWidth;
    }

    ngOnInit(){
        this.getThemes();
        this.getLanguages();
    }

    getThemes() {
        this.headerService.getThemes()
                          .subscribe(themes => this.themes = themes, error =>  this.errorMessage = <any>error);
    }

    getLanguages(){
        this.headerService.getLanguages()
                          .subscribe(languages => this.languages = languages, error =>  this.errorMessage = <any>error);
    }
}