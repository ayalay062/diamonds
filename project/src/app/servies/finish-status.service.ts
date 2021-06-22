import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../Classes/status';

@Injectable({
  providedIn: 'root'
})
export class FinishStatusService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:14912/api/diamondStatus/";

  diamondWithFinisfStatus(entringName:string,password:string):Observable<Status[]>
  {
    return this.http.get<Status[]>(this.baseUrl+"getDiamondsTraderOfFinishStatus/"+entringName+"/"+password);
  }
}
