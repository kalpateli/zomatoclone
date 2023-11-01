import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  apiEndPoint : string ="https://freeapi.miniprojectideas.com/api/zomato/";

  constructor(private http : HttpClient) { 
  }

  registerNewUser(obj : any) : Observable<any>{
    return this.http.post(this.apiEndPoint+"AddNewUser",obj);
  }
}
