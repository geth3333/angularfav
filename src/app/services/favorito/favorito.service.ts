import { Injectable } from '@angular/core';
import { Http, Response, Headers, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { FavoritoModel } from '../../models/favorito/favoritoModel';

@Injectable()
export class FavoritoService {

  public url: string;

  constructor(private _http: Http) {
    this.url = 'http://localhost:8000/api/';


  };

  getFavoritos(){
    return this._http.get(this.url + "favoritos").map(res => res.json());
  };

  getFavorito(id){
    return this._http.get(this.url + "favorito/" + id).map(res => res.json());
  };

  addFavorito(favorito: FavoritoModel){

    let parameter = JSON.stringify(favorito);
    let header = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url + "favorito", parameter, {headers:header}).map(res => res.json());
  };

  setFavorito(favorito: FavoritoModel){

    let parameter = JSON.stringify(favorito);
    let header = new Headers({'Content-Type':'application/json'});

    return this._http.put(this.url + "favorito/" + favorito._id, parameter, {headers:header}).map(res => res.json());
  };

  delFavorito(id){
    return this._http.delete(this.url + "favorito/" + id).map(res => res.json());
  };

}
