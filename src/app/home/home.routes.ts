import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { JobListComponent } from './jobList/jobList.component';

export const HomeRoutes=[
	{
		path:'',
		redirectTo:'hot',
		pathMatch:'full'
	},{
		path:'',
        component:HomeComponent,
        children:[{
    	 	path:':type',
        	component:JobListComponent
    	}]
    }];