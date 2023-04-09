export class Experiencia {
  id?: number;
puesto: string;
inicio: string;
fin: string;
descripcion: string;
imagen:string;
empresa: string;




  constructor(puesto: string, inicio: string, fin: string,descripcion: string,imagen: string,empresa: string ) {

      this.puesto = puesto;
      this.inicio = inicio;
      this.fin = fin;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.empresa = empresa;

  }


}
