import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {
  batchId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.batchId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
