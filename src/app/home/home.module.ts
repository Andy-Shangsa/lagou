import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent }   from './home.component';
import { JobListComponent } from './jobList/jobList.component';
import { SliderPicComponent } from './slider-pic/slider-pic.component';

import { JobListService } from './services/joblist.services';
import { PublicService } from '../common/services/public.services'


import {HomeRoutes} from './home.routes';

@NgModule({
    imports: [
    	FormsModule,
    	CommonModule,
        RouterModule.forChild(HomeRoutes)
    ],
    exports: [],
    declarations: [
        HomeComponent,
        JobListComponent,
        SliderPicComponent
    ],
    providers: [
        JobListService,
        PublicService
    ],
})
export class HomeModule { }