import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './Iniciarsesion/iniciarsesion.component'
import { PortfolioComponent } from './portfolio/portfolio.component';



const routes: Routes = [

{path:'',component:PortfolioComponent,},
{path:'iniciarsesion',component:IniciarSesionComponent},
{path:'',redirectTo:'iniciarsesion',pathMatch:'full'}



]
;

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
