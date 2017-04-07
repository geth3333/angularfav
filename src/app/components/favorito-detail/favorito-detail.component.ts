import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritoService } from '../../services/favorito/favorito.service';

@Component({
  selector: 'app-favorito-detail',
  templateUrl: './favorito-detail.component.html',
  styleUrls: ['./favorito-detail.component.css'],
  providers: [FavoritoService],
})
export class FavoritoDetailComponent implements OnInit {

  errorMessage:any;
  favorito:any;

  constructor(
    private _FavoritoService: FavoritoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getFavorito();

  }

  getFavorito(){
    this._route.params.forEach((params:Params)=>{

      let id = params['id'];
      this._FavoritoService.getFavorito(id).subscribe(

        response => {
          this.favorito = response.favorito;
          console.log(this.favorito);
          if(!this.favorito){
            this._router.navigate(['/']);

          }
        },

        error => {
          this.errorMessage =error;
          if (this.errorMessage != null){
            console.log(this.errorMessage);
            alert("Error en la petición");
          }
        }

      );

    });
  };

}
