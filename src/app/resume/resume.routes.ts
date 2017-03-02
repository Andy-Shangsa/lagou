import { RouterModule } from '@angular/router';
import { ResumeComponent } from './resume.component';
import { ResumeIndexComponent } from './resume-index/resumeIndex.component';


export const ResumeRoutes =[
	{
        path:'',
        component: ResumeComponent
    },{
    	path: 'index',
    	component: ResumeIndexComponent
    }];