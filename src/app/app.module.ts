import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaLaboralComponent } from './experienciaLaboral/experienciaLaboral.component';
import { FooterComponent } from './footer/footer.component';
import { HysComponent } from './hys/hys.component';
import { BannerComponent } from './banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IniciarSesionComponent } from './Iniciarsesion/iniciarsesion.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormGroup, FormsModule } from '@angular/forms';

import { ModalAcercademiAddComponent } from "./acercademi/modal-acercademi-add/modal-acercademi-add.component";
import { ModalEducacionAddComponent } from "./educacion/modal-educacion-add/modal-educacion-add.component";
import { ModalPerfilAddComponent } from "./perfil/modal-perfil-add/modal-perfil-add.component";
import { ModalExperienciaComponent } from "./experienciaLaboral/modal-experiencia-add/modal-experiencia.component";
import { ModalHysComponent } from "./hys/modal-hys/modal-hys.component";
import { ReactiveFormsModule } from '@angular/forms';








@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        BannerComponent,
        AcercademiComponent,
        EducacionComponent,
        ExperienciaLaboralComponent,
        FooterComponent,
        HysComponent,
        PaginaerrorComponent,
        PerfilComponent,
        IniciarSesionComponent,
        PortfolioComponent,
        ModalAcercademiAddComponent,
        ModalEducacionAddComponent,
        ModalPerfilAddComponent,
        ModalExperienciaComponent,
        ModalHysComponent,


    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        NgCircleProgressModule.forRoot({}),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule


    ]
})
export class AppModule {  }
