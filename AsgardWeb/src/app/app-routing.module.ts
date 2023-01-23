import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { initializeApp } from "firebase/app";

const routes: Routes = [];
const firebaseConfig = {
  apiKey: "AIzaSyDK0jRs7vrBY0XSiWjvqLaqYkPwKVzZqqQ",
  authDomain: "asgardbox-72927.firebaseapp.com",
  projectId: "asgardbox-72927",
  storageBucket: "asgardbox-72927.appspot.com",
  messagingSenderId: "108300237232",
  appId: "1:108300237232:web:d97becf44bf0675f97fe75"
};
const app = initializeApp(firebaseConfig);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
