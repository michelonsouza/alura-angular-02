import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Model, Thought, CreateThoughtFormValues } from '@/models';
import { ThoughtService } from '@/services';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
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

  thought: CreateThoughtFormValues = {
    content: '',
    authorship: '',
    model: 'modelo1',
  };
  constructor(private router: Router, private service: ThoughtService) {}

  ngOnInit(): void {}

  createThought() {
    this.service.create(this.thought as Thought).subscribe({
      next: () => {
        this.thought = {
          content: '',
          authorship: '',
          model: 'modelo1',
        };

        this.router.navigate(['/list-thought']);
      },
      error: console.error,
    });
  }
}
