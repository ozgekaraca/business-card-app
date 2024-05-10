import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = 'https://demo.limantech.com/cards/public/api';

  cards!: Card[];

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl + '/cards');
  }
  addNewCard(cardData: any): Observable<any> {
    return this.http.post<Card[]>(this.apiUrl + '/cards', cardData);
  }
}
