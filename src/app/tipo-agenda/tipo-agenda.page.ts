import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-agenda',
  templateUrl: './tipo-agenda.page.html',
  styleUrls: ['./tipo-agenda.page.scss'],
})
export class TipoAgendaPage implements OnInit {
  cerrarSesion:string = "assets/img/login.png";


  belleza:string = "assets/img/logoBelleza.png";
  medico:string = "assets/img/logoServicioMedico.png";
  gubernamental:string = "assets/img/logoGubernamental.png";
  bienvenida:string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.bienvenida = localStorage.getItem('bienvenida')!;
    console.log(this.bienvenida);
    
  }

  navegacion(pagina:string){
    if (pagina === 'belleza') { sessionStorage.setItem("tipoDeServicio", 'belleza');}
    if (pagina === 'medico') { sessionStorage.setItem("tipoDeServicio", 'medico');}
    if (pagina === 'gubernamental') { sessionStorage.setItem("tipoDeServicio", 'gubernamental');}
    this.router.navigate(['/lugares-atencion']);      

  }

  login(){
    this.router.navigate(['/login'])
  }
}
