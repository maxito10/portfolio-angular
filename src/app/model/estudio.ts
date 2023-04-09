export class Estudio {


id?: number;
titulo: string;
inicio: string;
fin: string;
descripcion: string;
imginst:string;
institucion: string;
url:string;



  constructor(titulo: string, inicio: string, fin: string,descripcion: string,imginst: string,institucion: string,url: string ) {

      this.titulo = titulo;
      this.inicio = inicio;
      this.fin = fin;
      this.descripcion = descripcion;
      this.imginst = imginst;
      this.institucion = institucion;
      this.url = url;
  }


}
