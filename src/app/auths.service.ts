import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {
  token=null;
  constructor(private http:HttpClient,private router:Router, private toastr: ToastrService) { }
  register(userData:any):Observable<any>{
    return this.http.post<any>("https://zen-user-api.herokuapp.com/users/register",userData);
}
login(userData:any):Observable<any>{
  return this.http.post<any>("https://zen-user-api.herokuapp.com/users/authenticate",userData);
}

storeToken(token){
  localStorage.setItem('token',token);
}

isLoggedIn(){
return !!localStorage.getItem('token');
}

logout(){
localStorage.removeItem('token');
this.router.navigate(["/"]);
this.toastr.info("Logged out", "Adios", {timeOut: 3000})
}
}
