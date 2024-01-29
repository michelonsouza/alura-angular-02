import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { Thought } from '@/models';
import { ThoughtService } from '@/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thought-list',
  templateUrl: './thought-list.component.html',
  styleUrls: ['./thought-list.component.css'],
})
export class ThoughtListComponent implements OnInit, OnDestroy {
  thoughtList: Thought[] = [];

  hasMoreThoughts = true;

  currentPage: number = 1;

  filter: string = '';

  showFavories: boolean = false;

  title: string = 'Meu Mural';

  private $onDestroy = new Subject<boolean>();

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .list(this.currentPage, this.filter, this.showFavories)
      .subscribe({
        next: (value) => {
          this.thoughtList = value;
        },
        error: console.error,
      });
  }

  ngOnDestroy(): void {
    this.$onDestroy.next(true);
    this.$onDestroy.complete();
  }

  refresh() {
    this.showFavories = false;
    this.currentPage = 1;
    this.router.navigate([this.router.url]);
  }

  getMoreThoughts() {
    this.currentPage = this.currentPage + 1;
    this.service
      .list(this.currentPage, this.filter, this.showFavories)
      .subscribe({
        next: (value) => {
          this.thoughtList = this.thoughtList.concat(value);

          if (value.length === 0) {
            this.hasMoreThoughts = false;
          }
        },
      });
  }

  searchThoughts() {
    console.log('aqui', this.filter);
    this.hasMoreThoughts = true;
    this.currentPage = 1;
    this.service
      .list(this.currentPage, this.filter, this.showFavories)
      .pipe(takeUntil(this.$onDestroy))
      .subscribe({
        next: (value) => {
          this.thoughtList = value;
        },
        error: console.error,
      });
  }

  listFavorites() {
    this.title = 'Meus Favoritos';
    this.currentPage = 1;
    this.hasMoreThoughts = true;
    this.showFavories = true;

    this.service
      .list(this.currentPage, this.filter, this.showFavories)
      .subscribe({
        next: (value) => {
          this.thoughtList = value;
          this.showFavories = true;
        },
        error: console.error,
      });
  }

  onFavoriteUpdated(thought: Thought) {
    const newFavorite = !thought.favorite;

    if (this.showFavories && !newFavorite) {
      this.thoughtList.splice(this.thoughtList.indexOf(thought), 1);
    } else {
      this.thoughtList = this.thoughtList.map((findedThought) =>
        findedThought.id === thought.id
          ? { ...thought, favorite: newFavorite }
          : findedThought
      );
    }

    this.service.toggleFavorite(thought).subscribe({
      error: console.error,
    });
  }
}
