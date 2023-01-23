import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat'; //v9
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(public _auth: AngularFireAuth) {}

async login(email: string, password: string){
  try{
      return await this._auth.signInWithEmailAndPassword(email, password);
  }
  catch(error) {
      alert("No se ha podido hacer el log-in correctamente. Error: " + error)
      console.log("No se ha podido hacer el log-in correctamente. Error: " + error);
      return null;
  }
}

async registro(email: string, password: string){
  try{
      return await this._auth.createUserWithEmailAndPassword(email, password);
  }
  catch(error) {
      alert("No se ha podido hacer el registro correctamente. Error: " + error)
      console.log("No se ha podido hacer el registro correctamente. Error: " + error);
      return null;
  }
}

async logOut(){
   this._auth.signOut();
}

getInfoUsuarioLoggeado(){
  return this._auth.authState;
}

async updateUsuario(nombre: string, foto : string){
  var user = firebase.auth().onAuthStateChanged(function(user){
      if (user) {
        console.log(user);
      user.updateProfile( {
          displayName: nombre ,
          photoURL :foto,
        })
      } else {
        console.log('No hay usuario logueado');
      }
    })
};
}
