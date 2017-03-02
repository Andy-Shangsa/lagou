import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { JobListService } from '../services/joblist.services';

@Component({
    selector: 'job-list',
    templateUrl: './jobList.component.html',
    styleUrls: ['./jobList.component.css']
})
export class JobListComponent implements OnInit {
	public jobList:Object;
  	constructor(
  		public activatedRoute: ActivatedRoute,
  		public jobListService: JobListService

  	) { }

  	ngOnInit() {
  		this.activatedRoute.params.subscribe(params => {
            // 这里可以从路由里面获取URL参数
            for(let i in params) {
            	this.loadData(params[i]);
            }
        });
  	}

  	public loadData(page:string) {
  			return this.jobListService.getJobList(page).subscribe(
				res=>{
					//console.log(res);
					this.jobList = res.items
				},
				error => {console.log(error)},
				() => {}
			);	
        
    }
}
