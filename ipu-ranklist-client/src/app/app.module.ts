import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdsenseModule } from "ng2-adsense";
import { LottieAnimationViewModule } from 'ng-lottie';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './shared/modal/modal.component';
import { TableComponent } from './shared/table/table.component';
import { RanklistComponent } from './ranklist/ranklist.component';
import { ListformComponent } from './ranklist/listform/listform.component';
import { BcaRanklistComponent } from './bca-ranklist/bca-ranklist.component';
import { BcaListformComponent } from './bca-ranklist/bca-listform/bca-listform.component';
import { ProfileComponent } from './student/profile/profile.component';
import { StudentComponent } from './student/student.component';

import { ModelService } from './shared/model.service';
import { EventService } from './shared/event.service';
import { BbaRanklistComponent } from './bba-ranklist/bba-ranklist.component';
import { BbaListformComponent } from './bba-ranklist/bba-listform/bba-listform.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ranklist', component: RanklistComponent },
    { path: 'bca-ranklist', component: BcaRanklistComponent },
    { path: 'bba-ranklist', component: BbaRanklistComponent },
    { path: 'student', component: StudentComponent },
    { path: 'student/:enroll', component: ProfileComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RanklistComponent,
        ListformComponent,
        ProfileComponent,
        StudentComponent,
        NavComponent,
        HomeComponent,
        BcaRanklistComponent,
        BcaListformComponent,
        ModalComponent,
        TableComponent,
        BbaRanklistComponent,
        BbaListformComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgxSpinnerModule,
        NgxChartsModule,
        BrowserAnimationsModule,
        LottieAnimationViewModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        AdsenseModule.forRoot({
            adClient: 'ca-pub-2511778193246891',
            adSlot: 7676264485
        })
    ],
    providers: [
        EventService,
        ModelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
