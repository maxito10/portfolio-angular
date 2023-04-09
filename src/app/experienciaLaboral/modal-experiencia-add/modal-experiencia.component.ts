import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  puesto: string = '';
  inicio: string = '';
  fin: string = '';
  descripcion: string = '';
  imagen:string = '';
  empresa: string = '';


  constructor(private sExperiencia:ExperienciaService,private router:Router) { }

  ngOnInit() {
  }

onCreate(): void{
const expe = new Experiencia(this.puesto,this.inicio,this.fin,this.descripcion,this.imagen,this.empresa)
this.sExperiencia.save(expe).subscribe(
    data => {
      alert("Experiencia añadida");

    }


)

}
}
