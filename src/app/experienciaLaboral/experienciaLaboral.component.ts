import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { ExperienciaService } from '../servicios/experiencia.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-experienciaLaboral',
  templateUrl: './experienciaLaboral.component.html',
  styleUrls: ['./experienciaLaboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experiencias: Experiencia[]=[];



  constructor(public tokenService: TokenService, private experienciaService:ExperienciaService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }
cargarExperiencia():void{
  this.experienciaService.lista().subscribe(data => {this.experiencias=data});
}



delete(id:number){
  if(id != undefined){
    this.experienciaService.delete(id).subscribe(data => {
      //alert("Experiencia eliminada correctamente")
      this.cargarExperiencia();
    }, err => {
      alert("no se pudo eliminar la educacion")

    })
  }
}
}
