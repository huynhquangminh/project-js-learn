import { AsideComponent } from './../common/component/aside/aside.component';
import { PostItemComponent } from './../common/component/post-item/post-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { IndexComponent } from './index/index.component'
import {MaterialModule} from '../material.module'
@NgModule({
  declarations: [
    IndexComponent,
    PostItemComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
