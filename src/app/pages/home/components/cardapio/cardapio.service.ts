import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CardapioService {

  //API (https://foodish-api.herokuapp.com/) 
  URL = `https://foodish-api.herokuapp.com/api/`;

  constructor(private http: HttpClient) { }

  public getImagens() {
    return this.http.get(this.URL)
  }

}
