import { Component } from '@angular/core';
interface FeedbackEntry {
  studentName: string;
  batchNumber: number | null;
  gender:string;
  age:number;
}

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {
  studentName: string = '';
  batchNumber: number | null = null;
  feedbackEntries: FeedbackEntry[] = [];  // Simplified declaration
gender: any;
age: any;

  onSubmit(form: any) {
    if (form.valid) {
      this.feedbackEntries.push({
        studentName: this.studentName,
        batchNumber: this.batchNumber,
        gender:this.gender,
        age:this.age
      });
      this.resetForm(form);
    }
  }

  resetForm(form: any) {
    form.resetForm();
    this.studentName = '';
    this.batchNumber = null;
    this.gender = '';
    this.age= null;
  }
}
