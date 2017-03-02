import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class JobListService {
    public jobListURL = './mock-data/jobList-mock.json';
    public newJobListURL = './mock-data/newJob-mock.json';

    constructor(public http:Http) { }
  
        public getJobList(type:string){
            let url = this.jobListURL;
            let params = new URLSearchParams();
            if(type == 'new') {
                url = this.newJobListURL;
            }
            return this.http
                .get(url)
                .map((res:Response) => {
                   let result=res.json();
                   return result;
                })
               .catch((error:any) => Observable.throw(error || 'Server error'));
            }

        public getPostNumber():number{
            return 0;
        }

        public addPost(user:any){

        }


}