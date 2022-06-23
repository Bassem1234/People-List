import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
private _usersUrl = "http://localhost:3000/Users/";
  constructor(private http: HttpClient) { }

//Get All users
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this._usersUrl);
 }

 //Get one user by id
 getUser(input:number): Observable<User[]>{
  return this.http.get<User[]>(this._usersUrl + '/' + input);
}
addUser(data:any){
  return this.http.post(this._usersUrl, data);
}
}
