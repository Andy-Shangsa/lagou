import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navBar.component.css']
})
export class NavComponent {
    menu = [{
    	name: "首页",
    	hash: "home"
    },{
    	name: "公司",
    	hash: "company"
    },{
    	name: "一拍",
    	hash: "one"
    },{
  	    name: "言职",
    	hash: "job"
    },{
    	name: "大鲲",
    	hash: "fish"
    }];
  
}
