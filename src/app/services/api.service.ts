import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameI } from '../model/game';
import { StoreI } from '../model/store';
import { StoreListI } from '../model/stores.list';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseURL = 'https://rawg-video-games-database.p.rapidapi.com';

  constructor( private http: HttpClient ) {}

  findStores(): Observable<StoreListI> {

    return this.http.get<StoreListI>( this.baseURL + '/stores', {
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0"
      },
      params: {
        "key": "c13d9de91ed24b13abd23ec72a84ddbe"
      }
    } )

  }

  findStoreById( id: number ): Observable<StoreI> {

    return this.http.get<StoreI>( this.baseURL + '/stores/' + id.toString(), {
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0"
      },
      params: {
        "key": "c13d9de91ed24b13abd23ec72a84ddbe"
      }
    } )

  }

  findGameById( id: number ): Observable<GameI> {

    return this.http.get<GameI>( this.baseURL + '/games/' + id.toString(), {
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0"
      },
      params: {
        "key": "c13d9de91ed24b13abd23ec72a84ddbe"
      }
    } )

  }

}
