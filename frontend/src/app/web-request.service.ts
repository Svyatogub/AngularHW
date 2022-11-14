import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { List } from './models/list.model';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient ) { 
    this.ROOT_URL = "http://localhost:3000"
  }

  get(uri: string) {
    return this.http.get<List | Task>(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, payload: Object) {
    return this.http.post<List | Task>(`${this.ROOT_URL}/${uri}`, payload);
  }
  patch(uri: string, payload: Object) {
    return this.http.patch<List | Task>(`${this.ROOT_URL}/${uri}`, payload);
  }
  delete(uri: string) {
    return this.http.delete<List | Task>(`${this.ROOT_URL}/${uri}`)
  }
}
