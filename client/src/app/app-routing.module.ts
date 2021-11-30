import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { LibroListComponent } from './components/libro-list/libro-list.component';
import {CategoriaFormComponent} from './components/categoria-form/categoria-form.component';
import {LibroFormComponent} from './components/libro-form/libro-form.component';
import { InicioFormComponent } from './components/inicio-form/inicio-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'categorias',
    component: CategoriaListComponent
  },
  {
    path: 'libros',
    component: LibroListComponent
  },
  {
    path: 'categorias/add',
    component: CategoriaFormComponent
  },
  {
    path: 'libros/add',
    component: LibroFormComponent
  },
  {
    path: 'categorias/edit/:id',
    component: CategoriaFormComponent
    
  },
  {
    path: 'libros/edit/:id',
    component: LibroFormComponent
  },
  {
    path: 'inicio',
    component: InicioFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
