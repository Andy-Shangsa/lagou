import { Component} from '@angular/core';
/*
 *	该组件需要在app.module依赖注入
 */
@Component({
    selector: 'top-bar',
    templateUrl: './topBar.component.html',
    styleUrls: ['../navBar.component.css']
})
export class TopComponent {
    public hash: string;
    public topMenu: Object;


    constructor(

    ) {
        let local = localStorage.getItem("resume");
        if ( local == null || local == undefined || !local || local == "") {
            this.hash = 'resume';
        }
        else {
            this.hash = 'resume/index';
        }
        this.topMenu = [{
            title: '消息',
            hash: 'message'
        },{
            title: '我的简历',
            hash: this.hash
        },{
            title: '投递箱',
            hash: 'box'
        },{
            title: '收藏夹',
            hash: 'collection'
        },{
            title: '知名公司',
            hash: 'company'
        }]
    }

    topNav(e) {
        //console.log(e);
    }
}