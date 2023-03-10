import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {

  constructor(private _service : AuthService, private _router : Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this._service.logOut();
    console.log("Deslogueado");
    this._router.navigate(["/"]);
  }
}
