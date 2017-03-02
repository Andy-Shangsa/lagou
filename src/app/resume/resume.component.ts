import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { flyIn } from '../animations/fly-in';
import { Check } from '../common/js/check';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    animations: [
        flyIn
    ]
})
export class ResumeComponent implements OnInit {
	private qualifications:string[]=['大专','本科','硕士','博士','其他'];
    private Uname: string;
    private qualification: string = "最高学历";
    private year: string = "工作年限";
    private Ucall: string;
    private Umail: string;
    private workYear:string[]=['应届毕业生','1年','2年','3年','4年','5年','6年','7年','8年','9年','10年','10年以上'];
    private continueR:Function;
    private showQualification:false;
    private showWorkYear:false;
    public load: Function;
    public select: Function;
    public doSave: Function;
  	
  	constructor(
    	public route:ActivatedRoute,
   		public router: Router

   	)  {

    }

	ngOnInit() {
		this.continueR = (router => {
            for (let value of [this.Uname, this.Ucall, this.Umail]) {
                if(Check.null(value)) {
                    alert("输入不能为空！");
                    return false;
                }
            }
            if(this.qualification == "最高学历" || this.year == "工作年限"){
                alert("输入不能为空！");
                return false;
            }
            else {
                let obj = {name:this.Uname, call:this.Ucall, mail:this.Umail, year: this.year, qualification: this.qualification};
                this.doSave('resume', obj);

                // 相当于window.location.href，界面跳转
                this.router.navigateByUrl('resume/index');
            }
       		
        });

        this.doSave = ( (name, obj) => {
            let data = JSON.stringify(obj);
            localStorage.setItem(name, data);
        })

        this.select = ( (type, val) => {
            if(type == 'year') {
                this.year = val;
            }
            else {
                this.qualification = val;
            }
        })
	}
}
