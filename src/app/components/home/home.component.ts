import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreListI } from '../../model/stores.list';
import { ApiService } from '../../services/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable, first, last, of, retry } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  stores: StoreListI;

  constructor( private service: ApiService) {

    this.service.findStores().subscribe({

      next: (result) => {

        if(result) {
          this.stores = result;

          if(localStorage.getItem('stores') != null)
            localStorage.clear();

          localStorage.setItem('stores', JSON.stringify(this.stores));
          
        }

      },
      error: () => {

        retry(3)
        console.error("Vaya algo ha ido mal :(")

      }

    })

  }

}
