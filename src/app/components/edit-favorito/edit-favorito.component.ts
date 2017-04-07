import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritoService } from '../../services/favorito/favorito.service';
import { FavoritoModel } from '../../models/favorito/favoritoModel';


@Component({
  selector: 'app-edit-favorito',
  templateUrl: './edit-favorito.component.html',
  styleUrls: ['./edit-favorito.component.css'],
  providers: [FavoritoService],
})
export class EditFavoritoComponent implements OnInit {

  favorito:any;
  errorMessage:any;

  constructor(
    private _favoritoService: FavoritoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.favorito = new FavoritoModel("","","","");
  }

  ngOnInit() {
    this.getFavorito();

  }

  onSubmit(){

    this._favoritoService.setFavorito(this.favorito).subscribe(

      response => {

        if(response){
          //this._router.navigate(["marcador/",this.favorito._id]);
          this._router.navigate(["marcador/",this.favorito._id]);

        }else{

          alert("Error añadiendo");
        }

      },

      error => {

        if(error != null){
          alert("Error en servidor");
          console.log(error);
        }

      },

    );
  }

  getFavorito(){
    this._route.params.forEach((params:Params)=>{

      let id = params['id'];
      this._favoritoService.getFavorito(id).subscribe(

        response => {
          this.favorito = response.favorito;
          if(!this.favorito){
            this._router.navigate(['/']);

          }
        },

        error => {
          this.errorMessage =error;
          if (this.errorMessage != null){
            console.log(this.errorMessage);
            alert("Error tratando de conseguir marcador");
          }
        }

      );

    });
  };

}
