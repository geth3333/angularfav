import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

import { appRoutingProviders, routing } from './app.routing';

import { FavoritoDetailComponent } from './components/favorito-detail/favorito-detail.component';
import { AddFavoritosComponent } from './components/add-favoritos/add-favoritos.component';
import { DeleteMarcadorComponent } from './components/delete-marcador/delete-marcador.component';
import { EditFavoritoComponent } from './components/edit-favorito/edit-favorito.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritosComponent,
    FavoritoDetailComponent,
    AddFavoritosComponent,
    DeleteMarcadorComponent,
    EditFavoritoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [appRoutingProviders,],
  bootstrap: [AppComponent]
})
export class AppModule { }
