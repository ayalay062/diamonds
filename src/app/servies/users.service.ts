import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  constructor(private http:HttpClient,private act:ActivatedRoute) { }
   baseURL=" http://localhost:14912/api/users/";

  ifExsist(name:string,password:string):Observable<string>
  {
   return this.http.get<string>(this.baseURL+"ifExsistEnterNameAndPassword/"+name+"/"+password);
  }
   singularPassword(password:string):Observable<boolean>
   {
     return this.http.get<boolean>(this.baseURL+"singularPassword/"+password);
   }

}





