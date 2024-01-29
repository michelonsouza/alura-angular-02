import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Thought, CreateThoughtFormValues } from '@/models';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API_URL = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {}

  list(page = 1, filter: string, favorite: boolean): Observable<Thought[]> {
    const _limit = 6;
    const _start = (page - 1) * _limit;
    let params = new HttpParams().set('_start', _start).set('_limit', _limit);

    if (favorite) {
      params = params.set('favorite', favorite);
    }

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    return this.http.get<Thought[]>(this.API_URL, {
      params,
    });
  }

  toggleFavorite(thought: Thought): Observable<Thought> {
    return this.edit({ ...thought, favorite: !thought.favorite });
  }

  getById(id: string): Observable<Thought> {
    const url = `${this.API_URL}/${id}`;

    return this.http.get<Thought>(url);
  }

  create(thought: CreateThoughtFormValues): Observable<Thought> {
    return this.http.post<Thought>(this.API_URL, thought);
  }

  edit(thought: Thought): Observable<Thought> {
    const url = `${this.API_URL}/${thought.id}`;

    return this.http.put<Thought>(url, thought);
  }

  delete(id: string): Observable<Thought> {
    const url = `${this.API_URL}/${id}`;

    return this.http.delete<Thought>(url);
  }
}
