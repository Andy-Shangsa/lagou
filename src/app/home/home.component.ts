import { Component } from '@angular/core';
import { flyIn } from '../animations/fly-in';
import { PublicService } from '../common/services/public.services'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    flyIn
  ]
})
export class HomeComponent {
	navMenu = [
		{
			title: "技术",
			cl: 'sub-technology',
			list: ['Java', 'PHP','C++','Android','IOS','数据挖掘','测试','前端开发','html5','技术总监','架构师','CTO']
		},{
			title: "产品",
			cl: 'sub-product',
			list: ['产品总监', '产品经理', '数据产品经理', '游戏策划']
		},{
			title: "设计",
			cl: 'sub-design',
			list: ['UI设计师', '交互设计', '网页设计师', '平面设计师', '视觉设计师']
		},{
			title: '运营',
			cl: 'sub-operate',
			list: ['新媒体运营', '编辑', '数据运营', '运营总监', 'COO']
		},{
			title: '市场与销售',
			cl: 'sub-sell',
			list: ['市场推广', '市场总监', '市场策划', 'BD', '销售总监']
		},{
			title: '职能',
			cl: 'sub-function',
			list: ['HR', '行政', '财务', '审计']
		},{
			title: '金融',
			cl: 'sub-finance',
			list: ['投资', '融资', '并购', '风控']
		}
	]
	activeSub = null;
	searchPlaceholder = "全民求职季";
	hotSearch = ['Java', '测试', '后端开发', '2017百万offer', 'PHP', '产品经理', '运维', 'html5', '拉勾APP']
	public searchClick: Function;
	public autoSearch: boolean;

	constructor(
		public service: PublicService){
		this.autoSearch = false;
		this.searchClick = ( () => {
            this.autoSearch = true;
            this.searchPlaceholder = "搜索职位、公司或地点"
        });
        /*
         * angular2里面封装了dom操作方式 document.querySelector('***')
         */
        document.querySelector('body').addEventListener("click", (e) => {
        	if(e.target['className'] !== 'search-input' && e.target['className'] !== 'auto-search-title' && e.target['className'] !== 'auto-search-list') {
        		this.autoSearch = false;
        		this.searchPlaceholder = "全民求职季";
        	}
        	
        })

    }
}
