import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-resume-index',
  templateUrl: './resumeIndex.component.html',
  styleUrls: ['./resumeIndex.component.css'],
  animations: [flyIn]
})
export class ResumeIndexComponent implements OnInit {
    private qualifications:string[]=['大专','本科','硕士','博士','其他'];
    private workYear:string[]=['应届毕业生','1年','2年','3年','4年','5年','6年','7年','8年','9年','10年','10年以上'];
	public toggleImg : boolean;
	public nameEdit: boolean;
	public nameEditStaus: boolean;
  	public baseInfoEdit: boolean;
  	public baseInfoEditStaus: boolean;
  	public Uname: "";
    public Ucall: "";
    public Umail: "";
    public Uqualification: "";
    public Uyear: "";
  	public edit: Function;
  	public doSave: Function;
    public doEditSave: Function;
    public setData: Function;
    public name: string;
    public resumeInfo: {
        name: "",
        call: "",
        year: "",
        mail: "",
        qualification: ""
    };
    public Map = {
        "应届毕业生": "应届毕业生",
        "1年": "一年工作经验",
        "2年": "两年工作经验",
        "3年": "三年工作经验",
        "4年": "四年工作经验",
        "5年": "五年工作经验",
        "6年": "六年工作经验",
        "7年": "七年工作经验",
        "8年": "八年工作经验",
        "9年": "九年工作经验",
        "10年": "十年工作经验",
        "10年以上": "十年以上工作经验"

    }

    public doGet(name) {
        let data = localStorage.getItem(name);
        this.resumeInfo = JSON.parse(data);
        this.Uname = this.resumeInfo.name;
        this.Ucall = this.resumeInfo.call;
        this.Umail = this.resumeInfo.mail;
        this.Uqualification = this.resumeInfo.qualification;
        this.Uyear = this.resumeInfo.year;
    };

	ngOnInit() {
		this.toggleImg = false;
		this.nameEdit = false;
		this.nameEditStaus = true;
  		this.baseInfoEdit = false;
  		this.baseInfoEditStaus = true;

        this.doGet("resume");

  		this.edit = ( (type) => {
  			this[type] = false;
  		});

        this.doEditSave = ( (val) => {
            if (val == 'save') {
                this.resumeInfo.call = this.Ucall;
                this.resumeInfo.mail = this.Umail;
                this.resumeInfo.qualification = this.Uqualification;
                this.resumeInfo.year = this.Uyear;
                this.setData("resume", this.resumeInfo);
            }
            this.baseInfoEditStaus = true;
            this.Ucall = this.resumeInfo.call;
            this.Umail = this.resumeInfo.mail;
            this.Uqualification = this.resumeInfo.qualification;
            this.Uyear = this.resumeInfo.year;
        });

  		this.doSave = ( (val) => {
            if (val == 'save') {
                this.resumeInfo.name = this.Uname;
                this.setData("resume", this.resumeInfo);
            }
            this.nameEditStaus = true;
            this.Uname =  this.resumeInfo.name;
        });

        this.setData = ( (name, obj) => {
            let data = JSON.stringify(obj);
            localStorage.setItem(name, data);
        })
	}
		
}
