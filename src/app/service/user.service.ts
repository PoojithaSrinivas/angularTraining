import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly rootUrl = 'http://localhost:4200';
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    /*const parameters: User = {
      name: user.name,
      mobileno:  user.mobileno,
      emailid:  user.emailid,
      password:  user.password,
      address:  user.address,
      date:user.date
    }*/

    const parameters: User = {
      "name": user.name,
      "mobileno": user.mobileno,
      "emailid":  user.emailid,
      "password":user.password,
      "address":user.address,
      "date":user.date
    }
    
      
    
    //return this.http.post(this.rootUrl + '/api/User/Register', parameters);
    return this.http.post('http://localhost:3001/user/register', parameters);
  }

}