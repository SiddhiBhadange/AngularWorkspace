import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  students = [
    { id: 1, name: 'John Doe', batch: 'Batch A' },
    { id: 2, name: 'Jane Smith', batch: 'Batch B' },
    { id: 3, name: 'Tom Johnson', batch: 'Batch A' }
  ];
}
