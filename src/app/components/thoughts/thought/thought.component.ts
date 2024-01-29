import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Thought } from '@/models';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent {
  @Input()
  thought: Thought = {} as Thought;

  @Output()
  favoriteUpdated = new EventEmitter();

  constructor() {}

  thoughtWidth() {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }

    return 'pensamento-p';
  }

  getIsFavorite() {
    return this.thought?.favorite ? 'ativo' : 'inativo';
  }

  updateFavorite() {
    this.favoriteUpdated.emit(this.thought);
  }
}
