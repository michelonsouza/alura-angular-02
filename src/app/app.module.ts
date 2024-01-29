import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HeaderComponent,
  FooterComponent,
  ThoughtComponent,
  EditThoughtComponent,
  ThoughtListComponent,
  CreateThoughtComponent,
  DeleteThoughtComponent,
} from './components';
import { ShowMoreButtonComponent } from './components/thoughts/thought-list/show-more-button/show-more-button.component';

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
    ShowMoreButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
