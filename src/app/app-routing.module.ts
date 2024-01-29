import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import {
  CreateThoughtComponent,
  ThoughtListComponent,
  DeleteThoughtComponent,
  EditThoughtComponent,
} from './components/thoughts';
import { CustomReuseStrategy } from './resuse-strategy/custom-reuse-strategy';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-thought',
    pathMatch: 'full',
  },
  {
    path: 'list-thought',
    component: ThoughtListComponent,
    data: {
      reuseComponent: true,
    },
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
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy,
    },
  ],
})
export class AppRoutingModule {}
