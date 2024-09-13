import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://jsonplaceholder.typicode.com/todos/"

  constructor(private http: HttpClient) {
    this.getTodo()
   }

  getTodo() {
    return this.http.get(this.url)
  }
}
