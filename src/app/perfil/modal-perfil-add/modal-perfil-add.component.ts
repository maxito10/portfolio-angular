import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-modal-perfil-add',
  templateUrl: './modal-perfil-add.component.html',
  styleUrls: ['./modal-perfil-add.component.css']
})


export class ModalPerfilAddComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  titulo: string = '';

  constructor(private perfilS: PersonaService, private router: Router) {}

  ngOnInit() {}
  onCreate(): void {
    const perfil = new persona(this.nombre, this.apellido, this.titulo, '', '', '');
    this.perfilS.save(perfil).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
