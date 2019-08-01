import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

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

// const appRoutes: Routes = [
//     { path: 'ranklist', component: }
// ];
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TableComponent,
        FooterComponent,
        ModalComponent,
        RanklistComponent,
        ListformComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgxSpinnerModule
    ],
    providers: [
        ListService,
        ModelService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
