import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorariosService } from './service/horarios.service';
import { CitasService } from '../detalles-cita/service/citas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  cerrarSesion:string = "assets/img/login.png";
  id_lugar: any;
  horarios: any[] = [];
  user:string = localStorage.getItem('email')!;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _horariosService: HorariosService,
    private _citaService: CitasService,
    private location: Location

    ) { 

    this.route.paramMap.subscribe(params => {
      this.id_lugar = params.get("id_lugar");
      this.obtenerHorarios();
    })
  }

  ngOnInit() {
  }

  volver(){
    this.location.back();
  }
  obtenerHorarios(){
    this._horariosService.obtenerhorarios(parseInt(this.id_lugar)).subscribe({
      next: data =>{
        this.horarios = data;       
      },
      error: err => {
        console.log(err);
      }
    })
  }

  agendarCita(id:string){
    const data ={
      status:'ocupado'
    } 
    this._citaService.actualizarCita(id, data).subscribe({
      next: (res) => {
        console.log("Se Agendo la cita !!");
        this.router.navigate([`/detalles-cita/${this.id_lugar}/${id}`])
      },
      error: err => {
        console.log(err);
      }
    })
  }

  detalleCita(id:string){
    this.router.navigate([`/detalles-cita/${this.id_lugar}/${id}`])
  }

  eliminarHorario(id:string){
    this._horariosService.eliminarHorario(id).subscribe({
      next: () =>{
        console.log("eliminacion correcta");
        window.location.reload();

      },
      error: err => {
        console.log(err);
      }
    })
  }

  agregaHrorario(){
    this.router.navigate([`/agregar-horarios/${this.id_lugar}`])
  }


  login(){
    this.router.navigate(['/login'])
  }
}
