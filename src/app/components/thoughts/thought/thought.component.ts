import { Component, Input, OnInit } from '@angular/core';

import { Thought } from '@/models';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit {
  @Input()
  thought: Thought = {} as Thought;

  constructor() {}

  ngOnInit(): void {}

  thoughtWidth() {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }

    return 'pensamento-p';
  }
}
