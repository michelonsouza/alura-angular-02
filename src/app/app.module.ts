import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HeaderComponent,
  FooterComponent,
  ThoughtComponent,
  ThoughtListComponent,
  CreateThoughtComponent,
} from './components';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ThoughtListComponent,
    ThoughtComponent,
    DeleteThoughtComponent,
    EditThoughtComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
