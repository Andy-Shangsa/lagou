import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PublicService {
   
    public status: boolean;
    

    constructor() { 
        this.status = false;
    }
  
      

}