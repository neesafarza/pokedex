import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Pokemon } from '../pokemon';



@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {

  public onePokemon: Pokemon;
  public id: string;
  
  constructor(private client: ApiClientService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getPokemon();
  }
  getPokemon() {
    console.log(this.route.snapshot.params)
    this.id = this.route.snapshot.params.id
    this.client.catchOne(this.id).subscribe(res => {
    this.onePokemon = res;
  })
 }

}

