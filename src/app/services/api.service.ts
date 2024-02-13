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

  private headers: HttpHeaders;

  private params: HttpParams;

  constructor( private http: HttpClient ) {

    let head = new HttpHeaders();

    head.append( "x-rapidapi-host", "rawg-video-games-database.p.rapidapi.com" );
    head.append( "x-rapidapi-key", "45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0")

    this.headers = head;

    let par = new HttpParams();

    par.append( "key", "c13d9de91ed24b13abd23ec72a84ddbe");

    this.params = par;

  }

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

  findStoresById( id: number ): Observable<StoreI> {

    return this.http.get<StoreI>( this.baseURL + '/stores/' + id.toString(), {
      headers: this.headers,
      params: this.params
    } )

  }

  findGamesById( id: number ): Observable<GameI> {

    return this.http.get<GameI>( this.baseURL + '/games/' + id.toString(), {
      headers: this.headers,
      params: this.params
    } )

  }

}
