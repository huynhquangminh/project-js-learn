import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component'
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: IndexComponent},
            // { path: 'saving-account', component: TaikhoantietkiemComponent },
            // { path: 'recipient-contacts', component: DanhbanguoinhanComponent },
            // { path: 'internal-transfer', component: ChuyenkhoannoiboComponent },
            // { path: 'interbank-transfer', component: ChuyenkhoanliennganhangComponent },
            // { path: 'transaction-history', component: LichsugiaodichComponent },
            // { path: 'debt-reminder', component: LichsunhacnoComponent },
            // { path: 'create-debt-reminder', component: ThemnhacnoComponent },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}