import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Status } from '../Classes/status';
import { User } from '../Classes/user';
import { ProfessionalDiamonds } from '../Classes/professional-diamonds';
import { Professionales } from '../Classes/professionales';


@Injectable({
  providedIn: 'root'
})
export class ProfessianolService {

  constructor(private http: HttpClient) { }
  baseURL = "http://localhost:14912/api/";

  getListOfStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(`${this.baseURL}status/GetStatus`);
  }

  addProfessional(newProfessional: User, status: string, price: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseURL}users/addNewProfessional/${status}/${price}`, newProfessional);
  }
getProfessionalDiamonds(name:string,password:string):Observable<ProfessionalDiamonds[]>
{
  return this.http.get<ProfessionalDiamonds[]>("http://localhost:14912/api/professionalDiamonds/getProfessionalDiamonds/?entringName="+name+"&password="+password);

}
updateFinishStatus(diamond:ProfessionalDiamonds,endCT:number):Observable<boolean>
{
  return this.http.post<boolean>(`${this.baseURL}professionalDiamonds/updateFinishStatus/${endCT}`, diamond);
}
getProfessionalOfStatus(statusName:string):Observable<Professionales[]>
{
  return this.http.get<Professionales[]>(this.baseURL+"professionalDiamonds/getProfessionalesOfStatus/"+statusName);
}

}
