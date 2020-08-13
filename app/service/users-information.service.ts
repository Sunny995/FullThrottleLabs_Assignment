import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '../Interfaces/IUsers';

@Injectable({
  providedIn: 'root'
})
export class UsersInformationService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<IUsers>> {
    return this.http.get<Array<IUsers>>(`${this.url}/members`);
  }
}
