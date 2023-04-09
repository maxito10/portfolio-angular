import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  authURL ='https://backprueba-production-7b63.up.railway.app/auth/';
currentUserSubject: BehaviorSubject<any>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
   }

   IniciarSesion(credenciales:any):Observable<any>
   {
    return this.httpClient.post(this.authURL,credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
   }


public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{

    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);

  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }


}
