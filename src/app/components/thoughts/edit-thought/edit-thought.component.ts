import { Component, OnInit } from '@angular/core';

import { Model, Thought } from '@/models';
import { ThoughtService } from '@/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  models: Model[] = [
    {
      id: 'modelo1',
      class: 'modelo1',
      image: 'modelo1',
      label: 'Modelo 1',
      imgAlt: 'Aspas azuis',
    },
    {
      id: 'modelo2',
      class: 'modelo2',
      image: 'modelo2',
      label: 'Modelo 2',
      imgAlt: 'Aspas azul claro',
    },
    {
      id: 'modelo3',
      class: 'modelo3',
      image: 'modelo3',
      label: 'Modelo 3',
      imgAlt: 'Aspas verdes',
    },
  ];

  thought: Thought = {} as Thought;

  constructor(
    private service: ThoughtService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.getById(id).subscribe({
        next: (thought) => (this.thought = thought),
        error: console.error,
      });
    }
  }

  editThought(): void {
    this.service.edit(this.thought).subscribe({
      complete: () => {
        this.router.navigate(['/list-thought']);
      },
    });
  }

  cancel() {
    this.router.navigate(['/list-thought']);
  }
}
