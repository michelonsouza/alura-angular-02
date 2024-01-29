import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Model, Thought } from '@/models';
import { ThoughtService } from '@/services';
import { lowercaseValidator } from '@/validators';

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

  form!: FormGroup;

  constructor(
    private router: Router,
    private service: ThoughtService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      authorship: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
        lowercaseValidator,
      ],
      model: ['modelo1'],
      favorite: [false],
    });
  }

  createThought() {
    if (this.form.valid) {
      this.service.create(this.form.value as Thought).subscribe({
        next: () => {
          this.router.navigate(['/list-thought']);
        },
        error: console.error,
      });
    }
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
