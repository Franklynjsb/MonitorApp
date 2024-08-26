import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planta } from '../model/planta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SPlantaService {

  plantaURL = 'http://localhost:8080/planta';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Planta[]>{
    return this.httpClient.get<Planta[]>(this.plantaURL + `/lista`);
  } 

  public detail(id: number): Observable<Planta> {
    return this.httpClient.get<Planta>(this.plantaURL + `/detail${id}`);
  }

  public save(planta: Planta): Observable<any> {
    return this.httpClient.post<any>(this.plantaURL + `/create`, planta);
  }

  public update(id: number, planta: Planta): Observable<any> {
    return this.httpClient.put<any>(this.plantaURL + `/update/${id}`, planta);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.plantaURL + `/delete/${id}`);
  }



}
