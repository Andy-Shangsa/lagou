/*  CREATED BY 尚守安 2017-2-18  */
/*
 * ng2是异步加载各个module，引入BrowserModule之后就可使用ngFor等指令了，
 * 子模块需要在引入CommonModule即可使用这些指令
 * 每个组件只能出现在一个自己所归属的module里面
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//使用hash模式，默认是h5
import { LocationStrategy, HashLocationStrategy } from'@angular/common'; 
 //引入路由：第一步引入angular路由模块
import { RouterModule, Routes } from '@angular/router'; 
//引入路由：第二步引入自配置的路由模块
import {appRouter} from './app.router';  

/*  引入存在节点组件  */
import { AppComponent } from './app.component';
import { NavComponent } from './nav-bar/navBar.component';
import { FootComponent } from './foot/foot.component';
import { TopComponent } from './nav-bar/top-bar/topBar.component';
/*  引入路由组件  */
import { CompanyComponent } from './company/company.component';

//引入ng2-bootstrap（项目UI框架）所需的模块，然后在imports里面加入模块
import { 
	AlertModule, 
	AccordionModule, 
    CollapseModule,
    ModalModule
} from 'ng2-bootstrap';

@NgModule({
  //此处的import不同于顶部的import引入，功能是将各个分散的模块集成在一个离散单元里面
    imports: [  
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,    //集成路由：第三步加入路由依赖以及自配置依赖注入模块
        RouterModule.forRoot(appRouter),
        AlertModule.forRoot(),
        AccordionModule.forRoot(),
        CollapseModule.forRoot(),
        ModalModule.forRoot()
    ],
    providers: [{    //加入依赖的services
        provide: LocationStrategy, // 导航路径的策略设置
        useClass: HashLocationStrategy // 使用'#'方式的策略
    }],
    /*declarations：
    *配置components组件(注意不能在这里添加自成一个module的组件，相当于异步加载的模块，暂不要加载)
    *每个component组件只在一个module里出现，加载在它属于的最高级模块里面
    */
    declarations: [    
        AppComponent,
        NavComponent,
        FootComponent,
        TopComponent,
        CompanyComponent
    ],
    //配置AppComponent根组件
    bootstrap: [AppComponent]		
})

export class AppModule { }
