import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public pokemons: Pokemon[];

  constructor(private client: ApiClientService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.client.gottaCatchEmAll().subscribe((res) => {
      this.pokemons = res;
    })
  }
}
