import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private todoColums=[
    {key:"id", text:"Id", type:"plain"},
    {key:"userId", text:"Felhasz. az.", type:"number"},
    {key:"title", text:"Kulcs", type:"text"},
    {key:"completed", text:"Teljesítve", type:"boolean"}
  ]
  constructor() { }

  getTodoColumns() {
    return this.todoColums
  }
}
