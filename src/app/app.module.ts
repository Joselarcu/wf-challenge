import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"; 
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TableComponent } from './components/shared/table/table.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostUpdateComponent } from "./components/post-update/post-updatecomponent";
import { ConfirmationModalComponent } from './components/shared/confirmation-modal/confirmation-modal.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { PostService } from './services/post.service';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    PostListComponent,
    PostUpdateComponent,
    ConfirmationModalComponent,
    AlertComponent,
    PostDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [PostService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
