import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent {
  batches = [
    { id: 1, name: 'Batch A', details: 'Batch A Details' },
    { id: 2, name: 'Batch B', details: 'Batch B Details' }
  ];
}
