import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './ranklist/table/table.component';
import { FooterComponent } from './footer/footer.component';
import { ModelService } from './shared/model.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './ranklist/modal/modal.component';
import { ListService } from './ranklist/list.service';
import { RanklistComponent } from './ranklist/ranklist.component';
import { ListformComponent } from './ranklist/listform/listform.component';
import { ProfileComponent } from './student/profile/profile.component';
import { StudentComponent } from './student/student.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ranklist', component: RanklistComponent },
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
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgxSpinnerModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        ListService,
        ModelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
