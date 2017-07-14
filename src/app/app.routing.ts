import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AppArticleTabView } from './Components/Articles/app.articletabview';

const appRoutes: Routes = [
	{
		path:'articleDetails/:id',
		component: AppArticleTabView
	},{
		path:'',
		redirectTo: '',
		pathMatch: 'full'
	}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);