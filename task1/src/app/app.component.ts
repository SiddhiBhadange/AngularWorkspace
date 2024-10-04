import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';

  selectedNumber: number;

  constructor() {
    this.selectedNumber = 1; // Default selected value
  }
  tables: string[][] = [];  // Array to store the generated tables

  printTables() {
    this.tables = [];  // Clear previous tables

    for (let i = 1; i <= this.selectedNumber; i++) {
      let table: string[] = [];
      for (let j = 1; j <= 10; j++) {
        table.push(`${i} x ${j} = ${i * j}`);  // Generate each row for the table
      }
      this.tables.push(table);  // Add the generated table for the current number
    }
  }
}
