import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritoService } from '../../services/favorito/favorito.service';
import { FavoritoModel } from '../../models/favorito/favoritoModel';

@Component({
  selector: 'app-add-favoritos',
  templateUrl: './add-favoritos.component.html',
  styleUrls: ['./add-favoritos.component.css'],
  providers: [FavoritoService],
})
export class AddFavoritosComponent implements OnInit {

  favorito: FavoritoModel;

  constructor(

    private _favoritoService : FavoritoService,
    private _route: ActivatedRoute,
    private _router: Router,

  ) {
    this.favorito = new FavoritoModel("","","","");
  }

  ngOnInit() {
  }

  onSubmit(){

    this._favoritoService.addFavorito(this.favorito).subscribe(

      response => {

        if(response){
          this._router.navigate(["marcador/",response._id]);

        }else{

          alert("Error");
          console.log("Erraste");
        }

      },

      error => {

        if(error != null){
          alert("Error2");
          console.log(error);
        }

      },

    );
  }

}
