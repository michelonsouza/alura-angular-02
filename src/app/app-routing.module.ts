import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CreateThoughtComponent,
  ThoughtListComponent,
  DeleteThoughtComponent,
  EditThoughtComponent,
} from './components/thoughts';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-thought',
    pathMatch: 'full',
  },
  {
    path: 'list-thought',
    component: ThoughtListComponent,
  },
  {
    path: 'create-thought',
    component: CreateThoughtComponent,
  },
  {
    path: 'delete-thought/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'edit-thought/:id',
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
