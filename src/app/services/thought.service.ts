import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Thought, CreateThoughtFormValues } from '@/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API_URL = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {}

  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API_URL);
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
