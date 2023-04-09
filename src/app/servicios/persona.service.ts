import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})

export class PersonaService {
URL = 'https://backprueba-production-7b63.up.railway.app/personas';
  constructor(private httpClient: HttpClient) { }


 public getPersona(): Observable<persona>{

  return this.httpClient.get<persona>(this.URL+'/traer/perfil', { responseType: 'json' });
}

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + '/ver');
   }



   public save(persona: persona):Observable<any>{
    return this.httpClient.post<any>(this.URL + '/crear', persona)
   }


   public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(`${this.URL}/delete/${id}`, { responseType: 'json' });
  }

}
