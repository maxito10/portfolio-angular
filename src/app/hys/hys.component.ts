import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../model/habilidad';
import { HabilidadService } from '../servicios/habilidad.service';
import {TokenService} from 'src/app/servicios/token.service';


@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  isLogged = false;
  habilidad: Habilidad[] = [];



  constructor( public tokenService: TokenService, private habilidadService:HabilidadService) { }


  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }
cargarHabilidad():void{
  this.habilidadService.lista().subscribe(data => {this.habilidad=data});
}

delete(id:number){
  if(id != undefined){
    this.habilidadService.delete(id).subscribe(data => {
      //alert("Habilidad eliminada correctamente")
      this.cargarHabilidad();
    }, err => {
      alert("no se pudo eliminar la educacion")

    })
  }
}

}
