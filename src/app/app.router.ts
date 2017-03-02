import { RouterModule } from '@angular/router';

import { CompanyComponent } from './company/company.component';
//import { HomeRoutes } from './home/home.routes'


export const appRouter = [{
	  path: '',		//注意：不能用双引号
    redirectTo: 'home',
    pathMatch: 'full'   
  },{
    path: 'home',
    loadChildren:'./home/home.module#HomeModule'
  },{
    path: 'company',
    component: CompanyComponent
  },{
    path: 'one',
    component: CompanyComponent
  },{
    path: 'job',
    component: CompanyComponent
  },{
    path: 'resume',
    loadChildren:'./resume/resume.module#ResumeModule'
  },{
    path: '**',
    component: CompanyComponent
  }];