/*	CREATED BY SHANG SHOUAN 17-2-20	*/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
/*
 *FormsModule主要使用表单功能，如表单绑定ngmodel，否则报错，每个异步模块都需要引入
 *该CommonModule模块主要应对使用ngFor等语句，根模快引入一次BrowserModule，子模块引入CommonModule
 */
import { RouterModule } from '@angular/router';

import { ResumeComponent }   from './resume.component';
import { ResumeIndexComponent }   from './resume-index/resumeIndex.component';

import {ResumeRoutes} from './resume.routes';

@NgModule({
    imports: [
    	FormsModule,
    	CommonModule,
        RouterModule.forChild(ResumeRoutes)
    ],
    exports: [],
    declarations: [
        ResumeComponent,
        ResumeIndexComponent
    ],
    providers: [],
})
export class ResumeModule { }