import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { flyIn } from './animations/fly-in';

//declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    flyIn
  ]
})
export class AppComponent {
	public toUrl: Function;
    public hide: Function;
    public top: number;

    constructor(
        public location: Location,
   		public router: Router

   	) {
        /*$(document).click(function() {
            alert("333");
        })*/
    }
    ngOnInit() {
        this.toUrl = (router => {
       		// 相当于window.location.href，界面跳转
       		this.router.navigateByUrl('company');
             /*或者*/  this.location.go('/company')
        }) 
       
    }
}
