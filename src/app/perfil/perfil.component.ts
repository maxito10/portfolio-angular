import { Component, OnInit } from '@angular/core';

import { persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
persona: persona = new persona ("","","","","","");


  constructor( public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
