import { Component, VERSION } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   isLoggedIn: boolean = false;

  // checking if the user is ligged in 
  constructor(private r:Router, private auth:AngularFireAuth){
    this.auth.onAuthStateChanged(userDetails => {
      if(userDetails != null){
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }

    })
  }

  // logout function that route for the login page
  logout(){
    this.auth.signOut().then(()=> this.r.navigate(['login']));
  }

 
}
