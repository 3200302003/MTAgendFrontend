import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasService } from './service/citas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.page.html',
  styleUrls: ['./detalles-cita.page.scss'],
})
export class DetallesCitaPage implements OnInit {

  belleza:string = "assets/img/logoBelleza.png";
  medico:string = "assets/img/logoServicioMedico.png";
  gubernamental:string = "assets/img/logoGubernamental.png";
  img!:string;

  cerrarSesion:string = "assets/img/login.png";
  id_lugar: any;
  id_horario: any;

  fecha!: string ; 
  hora!: string; 
  direccion!: string ; 
  nombre!: string ; 

  tipoDeServicio:string | null;

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private _citaService: CitasService,
    private location: Location

    ) {

    this.route.paramMap.subscribe(params => {
      this.id_lugar = params.get("id_lugar");
      this.id_horario = params.get("id_horario");      
      this.obtenerDetalleCita();
    })
    this.tipoDeServicio = sessionStorage.getItem('tipoDeServicio');       

    if (this.tipoDeServicio === 'belleza') {this.img = this.belleza }
    if (this.tipoDeServicio === 'medico') {this.img = this.medico }
    if (this.tipoDeServicio === 'gubernamental') {this.img = this.gubernamental }
   }

  ngOnInit() {
  }

  volver(){
    this.location.back();
  }
  
  obtenerDetalleCita(){
    this._citaService.obtenerdetalleCita(parseInt(this.id_lugar), this.id_horario).subscribe({
      next: data =>{
        this.fecha = data.horario.fecha;  
        this.hora = data.horario.hora;  
        this.direccion = data.lugar.direccion;  
        this.nombre = data.lugar.nombre;  
      },
      error: err => {
        console.log(err);
      }
    })
  }

  cancelarCita() {
    const data ={
      status:'libre'
    }     
    this._citaService.actualizarCita(this.id_horario, data).subscribe({
      next: (res) => {
        console.log("Cita Cancelada !!");
        this.router.navigate([`/horarios/${this.id_lugar}`]);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  login(){
  this.router.navigate(['/login'])
  }
}
