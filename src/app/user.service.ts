import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient, private router:Router) { }
  login(user: any){
    return this .http.post("http://localhost:3000/login",user)
    //.subscribe((res)=>{
     // this.router.navigate(['booklist']);
     // alert("Successful login");
   // })
  }
  signup(form:any) {
return this.http.post("http://localhost:3000/signup",form)
//.subscribe((res)=>{
 // this.router.navigate(['booklist']);
  //alert("Signup completed");
//})
  }


}