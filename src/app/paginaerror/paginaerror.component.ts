import { Component, OnInit } from '@angular/core';
import { PortfolioservicioService } from '../servicios/Portfolioservicio.service';

@Component({
  selector: 'app-paginaerror',
  templateUrl: './paginaerror.component.html',
  styleUrls: ['./paginaerror.component.css']
})
export class PaginaerrorComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioservicioService) { }

  ngOnInit() {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
    });
  }

}
