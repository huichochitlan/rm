import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {  

  user!: SocialUser;  
  centered = false;
  disabled = false;
  unbounded = false;
  radius!: number;
  color!: string;

  constructor(
    public Usuario: UsuarioService    
    ) { }

  ngOnInit(): void {
    this.Usuario.authSN().subscribe( ( user ) =>{
      // this.Usuario.Crear(user).subscribe( (respuesta ) => {
      //   console.log(respuesta);

      // });
      // this.Usuario.user = user;
        // console.log(user);                
        // user?.name? this.Usuario.loggedIn = true : this.Usuario.loggedIn = false;
    });     

    // this.Usuario.authSN().subscribe( ( respuesta ) =>{
    //   console.log(respuesta);
    // });

  }  

 

}
