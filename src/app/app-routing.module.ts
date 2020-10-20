import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  { path: 'signin',
  loadChildren: './signin/signin.module#SigninPageModule'
  },
  { path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'shoplist',
  loadChildren: './shoplist/shoplist.module#ShoplistPageModule'
  },
  { path: 'additem',
  loadChildren: './additem/additem.module#AdditemPageModule'
  },
  { path: 'todo',
  loadChildren: './todo/todo.module#TodoPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
