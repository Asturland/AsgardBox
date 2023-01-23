import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public logueado : boolean;
  public usuario : any;
  constructor(private _service : AuthService, private _router : Router) {
    this.logueado = false;
  }

  ngOnInit(): void {
  this.usuarioLogueado();
  }

  usuarioLogueado(){
    this._service.getInfoUsuarioLoggeado().subscribe(res=>{
      if(res != null){
        this.logueado = true;
        this.usuario = res;

      }
      else{
        this.logueado = false;
      }
     
    });
  }

logOut():void{
  this._service.logOut().then(res => {
    this.logueado = false;
    this._router.navigate(["/"]);
  });
}

}
