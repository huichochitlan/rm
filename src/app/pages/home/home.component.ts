import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPersonajes: any;
  PaginaActual = 1;
  TotalPaginas!:number;

  constructor(
    private personajes : PersonajesService
  ) { }

  ngOnInit(): void {
    this.cargarPagina();
  }
  lista(pagina:number){
    this.personajes.lista(pagina).subscribe( ( respuesta:any ) =>{
      this.listaPersonajes = respuesta.results;      
      console.log(this.listaPersonajes);
    })
  }
  cargarPagina(){
    this.lista(this.PaginaActual);
  }
  paginacion(pagina:number){
    this.PaginaActual=this.PaginaActual+pagina ;
    this.cargarPagina();
  }

}
