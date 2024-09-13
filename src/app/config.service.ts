import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private todoColums=[
    {key:"id", type:"plain"},
    {key:"userId", type:"number"},
    {key:"title", type:"text"},
    {key:"completed", type:"boolean"}
  ]
  constructor() { }

  getTodoColumns() {
    return this.todoColums
  }
}
