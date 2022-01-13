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
    this.lista(1);
  }
  lista(pagina:number){
    this.personajes.lista(pagina).subscribe( ( respuesta:any ) =>{
      this.listaPersonajes = respuesta.results;
      this.TotalPaginas = respuesta.info.pages;
      console.log(this.listaPersonajes);
    })
  }
  // cargarPagina(pagina:number){
  //   this.lista(pagina);
  // }
  paginacion(pagina:number){
    // this.PaginaActual=this.PaginaActual+pagina ;
    this.lista(pagina);
    this.PaginaActual = pagina;
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
