import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Thought } from '@/models';
import { ThoughtService } from '@/services';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent implements OnInit {
  thought: Thought = {} as Thought;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.getById(id).subscribe({
        next: (thought) => {
          this.thought = thought;
        },
      });
    }
  }

  deleteThought() {
    this.service.delete(this.thought.id).subscribe({
      next: () => {
        this.router.navigate(['/list-thought']);
      },
    });
  }

  cancel() {
    this.router.navigate(['/list-thought']);
  }
}
