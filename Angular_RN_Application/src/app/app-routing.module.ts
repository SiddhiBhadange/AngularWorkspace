import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Batches/home/home.component';
import { StudentListComponent } from './Batches/student-list/student-list.component';
import { BatchListComponent } from './Batches/batch-list/batch-list.component';
import { StudentDetailsComponent } from './Batches/student-details/student-details.component';
import { BatchDetailsComponent } from './Batches/batch-details/batch-details.component';

const routes: Routes = [
  {
   path:'home',
   component:HomeComponent
  },
  {
    path:'students',
    component:StudentListComponent
  },
  {
    path:'batches',
    component:BatchListComponent
  },
  {
    path: 'students/:id',
     component: StudentDetailsComponent
  },
  {
    path: 'batches/:id',
    component: BatchDetailsComponent
  },
 { path: '',
   redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
