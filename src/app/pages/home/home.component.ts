import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPersonajes: any;

  constructor(
    private personajes : PersonajesService
  ) { }

  ngOnInit(): void {
    this.lista();
  }
  lista(){
    this.personajes.lista(2).subscribe( ( respuesta:any ) =>{
      this.listaPersonajes = respuesta.results;
      console.log(this.listaPersonajes);
    })
  }

}
