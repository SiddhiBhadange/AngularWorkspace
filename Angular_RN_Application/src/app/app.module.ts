import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Batches/home/home.component';
import { StudentListComponent } from './Batches/student-list/student-list.component';
import { BatchListComponent } from './Batches/batch-list/batch-list.component';
import { StudentDetailsComponent } from './Batches/student-details/student-details.component';
import { BatchDetailsComponent } from './Batches/batch-details/batch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    BatchListComponent,
    StudentDetailsComponent,
    BatchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
