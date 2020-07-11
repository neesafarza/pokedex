import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon'

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private baseURL: string = "http://localhost:3001/pokemons"

  constructor(private http: HttpClient) { }

  gottaCatchEmAll(): Observable<any>{

    return this.http.get(this.baseURL)
    
  }

  catchOne(id: string): Observable<any>{

    return this.http.get(`${this.baseURL}/${id}`)
  }
}




