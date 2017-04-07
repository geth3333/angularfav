import { Component, OnInit } from '@angular/core';
import {FavoritoModel} from '../../models/favorito/favoritoModel'
import {FavoritoService} from '../../services/favorito/favorito.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  providers: [FavoritoService],
})
export class FavoritosComponent implements OnInit {

  title: String;
  errorMessage: any;
  favoritos: FavoritoModel[];

  constructor(private _favoritoService:FavoritoService,
              private _router: Router) {
      this.title = 'Listado de marcadores';
      };


  ngOnInit() {

    this.getFavoritos();

  }

  ///////////////////

  getFavoritos(){

    this._favoritoService.getFavoritos().subscribe(
      result => {
        console.log(result);
        this.favoritos = result.favoritos;
        if(!this.favoritos){
          alert("Error en servidor");
        }
      },

      error => {
        this.errorMessage =error;

        if (this.errorMessage != null){
          console.log(this.errorMessage);
          alert("Error en la petición");
        }
      },
    );

  }

  ///////////////////

  delFav(id){
    this._favoritoService.delFavorito(id).subscribe(
      result => {
        if(!this.favoritos){
          alert("Error en servidor");
        }else{
          this.getFavoritos();
        }
      },

      error => {
        this.errorMessage =error;

        console.log('Error');
        console.log(error);
      },
    );
  }

  ///////////////////

}
