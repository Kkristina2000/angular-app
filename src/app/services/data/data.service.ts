import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { IData } from './data.interface'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  API_URL = 'http://localhost:3000/data'

  getAll() {
    return this.http.get<IData[]>(this.API_URL)
  }
}
