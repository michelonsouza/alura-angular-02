import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more-button',
  templateUrl: './show-more-button.component.html',
  styleUrls: ['./show-more-button.component.css'],
})
export class ShowMoreButtonComponent implements OnInit {
  @Input()
  hasMoreThoughts: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
