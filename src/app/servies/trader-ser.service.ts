import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DiamondsOfTrader } from '../Classes/diamonds-of-trader';
import { Observable, from } from 'rxjs';
import { User } from '../Classes/user';
import { Status } from '../Classes/status';
import {CleanLevels} from '../Classes/clean-levels'
import { Shapes } from '../Classes/shapes';
import { Colors } from '../Classes/colors';


@Injectable({
  providedIn: 'root'
})
export class TraderSerService {
  diamonds:Array<DiamondsOfTrader>;
  cleanList:Array<CleanLevels>;
  constructor(private http:HttpClient,private act:ActivatedRoute) { }
    baseUrl="http://localhost:14912/api/";
  listTraderDiamonds(name:string,password:string):Observable<DiamondsOfTrader[]>
  {
   return this.http.get<DiamondsOfTrader[]>(`${this.baseUrl}traderDiamonds/getDiamondsOfTrader/${name}/${password}`);
  }
  addNewTrader(newTrader:User):Observable<boolean>
  {
    return this.http.post<boolean>(`${this.baseUrl}users/addNewTrader/`,newTrader);
  }
  updateDiamondToNextStatus(diamond:Status):Observable<boolean>
  {
    return this.http.post<boolean>(this.baseUrl+"traderDiamonds/updatDiamondToTheNextStatus/",diamond);
  }
  removeDiamond(diamondId:number,name:string,password:string):Observable<DiamondsOfTrader[]>
  {
    return this.http.delete<DiamondsOfTrader[]>(`${this.baseUrl}traderDiamonds/removeDiamond/${diamondId}/${name}/${password}`);
  }
  getCleanList():Observable<CleanLevels[]>
  {
    return this.http.get<CleanLevels[]>(this.baseUrl+"traderDiamonds/getCleanList/");
  }
   getShapeList():Observable<Shapes[]>
   {
     return this.http.get<Shapes[]>(this.baseUrl+"traderDiamonds/getShapeList/");
   }
 
   getColorList():Observable<Colors[]>
   {
     return this.http.get<Colors[]>(this.baseUrl+"traderDiamonds/getColorList/");
   }
   addNewDiamond(name:string,password:string,price:number,newDiamond:DiamondsOfTrader):Observable<boolean>
   {
     return this.http.post<boolean>(`${this.baseUrl}traderDiamonds/addNewDiamond/${name}/${password}/${price}`,newDiamond);
   }
}


