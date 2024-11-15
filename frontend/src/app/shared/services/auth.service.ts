import { Injectable, inject } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {Router} from '@angular/router'
import { User } from '../../interfaces/userInterface.interface';
@Injectable({
  providedIn: "root",
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth,private router:Router){}

  login(email:string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      alert("logado")
    }, err=>{
      alert('deu erro')
      this.router.navigate(['/login'])
    })
  }

  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
      alert("registration sucessfull");
      this.router.navigate(["/login"]);
    },
  err => {
    alert(err.message);
    this.router.navigate(['/register']);
  })
  }

  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(["/dashboard"]);
    },err=>{
      alert(err.me)
    })
  }
}
