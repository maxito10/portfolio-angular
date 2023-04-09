import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-hys',
  templateUrl: './modal-hys.component.html',
  styleUrls: ['./modal-hys.component.css']
})
export class ModalHysComponent implements OnInit {
form: FormGroup;

habilidad = new FormControl('');
porcentaje = new FormControl('');

  constructor(private formBuilder: FormBuilder, private habilidadService:HabilidadService ) {
//creamos el grupo de constructores para el formulario

this.form = this.formBuilder.group({
  habilidad: this.habilidad,
  porcentaje: this.porcentaje
});
}

  ngOnInit():void {
  }

}
