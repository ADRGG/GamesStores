import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreListI } from '../../model/stores.list';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  stores!: StoreListI;

  constructor( private service: ApiService) {}

  ngOnInit(): void {

    this.service.findStores().subscribe({

      next: (result) => {

        if(result)
          this.stores = result;

      },
      error: () => {

        console.error("Vaya algo ha ido mal :(")

      }

    })
   
  }

}
