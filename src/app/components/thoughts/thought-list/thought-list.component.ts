import { Component, OnInit } from '@angular/core';

import { Thought } from '@/models';
import { ThoughtService } from '@/services';

@Component({
  selector: 'app-thought-list',
  templateUrl: './thought-list.component.html',
  styleUrls: ['./thought-list.component.css'],
})
export class ThoughtListComponent implements OnInit {
  thoughtList: Thought[] = [];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.list().subscribe({
      next: (value) => {
        this.thoughtList = value;
      },
      error: console.error,
    });
  }
}
