import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FavoritoDetailComponent } from './components/favorito-detail/favorito-detail.component';
import { AddFavoritosComponent } from './components/add-favoritos/add-favoritos.component';
import { DeleteMarcadorComponent } from './components/delete-marcador/delete-marcador.component';
import { EditFavoritoComponent } from './components/edit-favorito/edit-favorito.component';

const appRoutes: Routes = [

  {path : '', component: FavoritosComponent},
  {path : 'favoritos', component: FavoritosComponent},
  {path : 'marcador/:id', component: FavoritoDetailComponent},
  {path : 'addmarcador', component: AddFavoritosComponent },
  {path : 'delmarcador/:id?', component: DeleteMarcadorComponent},
  {path : 'editar/:id', component: EditFavoritoComponent},
  {path : '**', component: FavoritosComponent},


];

export const appRoutingProviders:any = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
