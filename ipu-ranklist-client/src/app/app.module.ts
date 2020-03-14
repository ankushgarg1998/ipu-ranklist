import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxSpinnerModule } from "ngx-spinner";
import { AdsenseModule } from "ng2-adsense";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './ranklist/table/table.component';
import { FooterComponent } from './footer/footer.component';
import { ModelService } from './shared/model.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './ranklist/modal/modal.component';
import { ListService } from './ranklist/list.service';
import { BcaListService } from './bca-ranklist/bca-list.service';
import { RanklistComponent } from './ranklist/ranklist.component';
import { ListformComponent } from './ranklist/listform/listform.component';
import { ProfileComponent } from './student/profile/profile.component';
import { StudentComponent } from './student/student.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { BcaRanklistComponent } from './bca-ranklist/bca-ranklist.component';
import { BcaListformComponent } from './bca-ranklist/bca-listform/bca-listform.component';
import { BcaModalComponent } from './bca-ranklist/bca-modal/bca-modal.component';
import { BcaTableComponent } from './bca-ranklist/bca-table/bca-table.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ranklist', component: RanklistComponent },
    { path: 'bca-ranklist', component: BcaRanklistComponent },
    { path: 'student', component: StudentComponent },
    { path: 'student/:enroll', component: ProfileComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TableComponent,
        FooterComponent,
        ModalComponent,
        RanklistComponent,
        ListformComponent,
        ProfileComponent,
        StudentComponent,
        NavComponent,
        HomeComponent,
        BcaRanklistComponent,
        BcaListformComponent,
        BcaModalComponent,
        BcaTableComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgxSpinnerModule,
        LottieAnimationViewModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        AdsenseModule.forRoot({
            adClient: 'ca-pub-2511778193246891',
            adSlot: 7676264485
        })
    ],
    providers: [
        ListService,
        BcaListService,
        ModelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
