import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Ropa } from './ropa-list/Ropa';

const URL = 'https://683916056561b8d882aefce7.mockapi.io/ropas';

@Injectable({
  providedIn: 'root'
})

export class DatosRopaService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * Consume la API de ropas y devuelve un observable a la respuesta.
   */

  public getAll(): Observable<Ropa[]> {

    return this.http.get<Ropa[]>(URL)
            .pipe(
              tap( (ropas:Ropa[]) => ropas.forEach(ropa => ropa.quantity = 0))
            );
  }
}
