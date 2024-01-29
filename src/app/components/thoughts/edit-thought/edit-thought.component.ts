import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { getFormErrorByName } from '@/errors';
import { Model } from '@/models';
import { ThoughtService } from '@/services';
import { lowercaseValidator } from '@/validators';

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

  form: FormGroup = this.formBuilder.group({
    id: [''],
    content: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ]),
    ],
    authorship: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        lowercaseValidator,
      ]),
    ],
    model: ['modelo1'],
    favorite: [false],
  });

  constructor(
    private service: ThoughtService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(id!).subscribe({
      next: (thought) => {
        this.form.setValue({
          id: thought.id,
          content: thought.content,
          authorship: thought.authorship,
          model: thought.model,
          favorite: thought?.favorite,
        });
      },
      error: console.error,
    });
  }

  editThought(): void {
    console.log({ value: this.form.value });
    this.service.edit(this.form.value).subscribe({
      complete: () => {
        this.router.navigate(['/list-thought']);
      },
    });
  }

  cancel() {
    this.router.navigate(['/list-thought']);
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }

  getError(fieldName: string, errorName: string): boolean {
    return getFormErrorByName(this.form, fieldName, errorName);
  }
}
