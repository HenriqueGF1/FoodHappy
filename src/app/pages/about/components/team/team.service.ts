import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  //API (https://randomuser.me/) 
  URL = `https://randomuser.me/api/?results=3&nat=br`;

  constructor(private http: HttpClient) { }

  public getPessoa() {
    return this.http.get(this.URL)
  }

}
