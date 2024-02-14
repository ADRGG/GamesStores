import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, of, repeat } from 'rxjs';
import { GameI } from '../../model/game';
import { StoreI } from '../../model/store';
import { StoreListI } from '../../model/stores.list';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.scss'
})
export class TiendaComponent {

  store: StoreI;

  gameDetails: GameI | undefined;

  constructor( private route: ActivatedRoute, private service: ApiService ) {

    this.loadStore().subscribe({
      next: (result) => {

        if(result)
          this.store = result;

      }
    });

  }

  getProps( object: Object ): string[] {

    return Object.keys(object);

  }

  getValues( object: Object ): string[] {

    return Object.values(object);

  }

  loadStore(): Observable<StoreI> {

    const id = this.route.snapshot.paramMap.get('id');

    let storeDetails: StoreI | null = null;

    if (id != null) {

      let storesString = localStorage.getItem('stores');

      let stores: StoreListI;

      if(storesString != null) {
        stores = JSON.parse( storesString );
        storeDetails = stores.results.find( store => store.id.toString() === id)!
      }

      return new Observable<StoreI>(observer => {
        this.service.findStoreById(+id).subscribe({
          next: result => {
            storeDetails = {
              ...result,
              ...storeDetails
            };
            observer.next(storeDetails);
            observer.complete();
          },
          error: () => {
            repeat(3);
            console.error("Vaya, algo ha ido mal :(");
            observer.error("Error al cargar los detalles de la tienda");
          }
        })
      });
    

    }

    return of();

  }

  loadGameDetails(gameId: number): void {
    this.service.findGameById(gameId).subscribe({
      next: (result) => {
        if(result)
          this.gameDetails = result;
      },
      error: () => {
        repeat(3);
        console.error("Vaya, algo ha ido mal :(");
      }
    })
  }

  cleanGameDetails(): void {
    this.gameDetails = undefined;
  }

}

