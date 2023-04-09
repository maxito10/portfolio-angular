import { Component, OnInit } from '@angular/core';
import { Estudio } from '../model/estudio';
import { EstudioService } from '../servicios/estudio.service.service';
import {TokenService} from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  isLogged = false;
  estudios: Estudio[]=[];



  constructor( public tokenService: TokenService, private estudioService:EstudioService) { }

  ngOnInit(): void {
    this.cargarEstudio();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }
cargarEstudio():void{
  this.estudioService.lista().subscribe(data => {this.estudios=data});
}



delete(id:number){
  if(id != undefined){
    this.estudioService.delete(id).subscribe(data => {
      //alert("Estudio eliminado correctamente")
      this.cargarEstudio();
    }, err => {
      alert("no se pudo eliminar la educacion")

    })
  }
}

}
