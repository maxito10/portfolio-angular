import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  persona: persona = new persona ("","","","","","");



  constructor( public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
