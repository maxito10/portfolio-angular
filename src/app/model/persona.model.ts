export class persona {

id?: number;
nombre: string;
apellido: string;
titulo: string;
imgpersona: string;
bannerpersona: string;
sobremi: string;

constructor(nombre: string, apellido: string, titulo: string,imgpersona: string,bannerpersona: string,sobremi: string ){
  this.nombre = nombre;
  this.apellido = apellido;
  this.titulo = titulo;
  this.imgpersona = imgpersona;
  this.bannerpersona = bannerpersona;
  this.sobremi = sobremi;
}
}
