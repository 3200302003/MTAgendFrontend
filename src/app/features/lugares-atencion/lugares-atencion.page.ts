import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LugaresAtencionService } from './service/lugares-atencion.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lugares-atencion',
  templateUrl: './lugares-atencion.page.html',
  styleUrls: ['./lugares-atencion.page.scss'],
})
export class LugaresAtencionPage implements OnInit {

  belleza:string = "assets/img/logoBelleza.png";
  medico:string = "assets/img/logoServicioMedico.png";
  gubernamental:string = "assets/img/logoGubernamental.png";
  img!:string;

  maps: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/2048px-Google_Maps_icon_%282015-2020%29.svg.png'
  tipoDeServicio: string| null ;

  user:string = localStorage.getItem('email')!;
  lugares: any[] = [];

  constructor(
    private router: Router,
    private _lugaresService: LugaresAtencionService,
    private location: Location

    ) { 
    this.tipoDeServicio = sessionStorage.getItem('tipoDeServicio');       
    if (this.tipoDeServicio === 'belleza') {this.img = this.belleza }
    if (this.tipoDeServicio === 'medico') {this.img = this.medico }
    if (this.tipoDeServicio === 'gubernamental') {this.img = this.gubernamental }

  }

  ngOnInit() {
    this.obtenerListaAtencion()
  }

  volver(){
    this.location.back();
  }

  obtenerListaAtencion(){
    this._lugaresService.obtenerlugaresAtencion().subscribe({
      next: data =>{
        this.lugares = data.filter((lugar: any) => lugar.tipo === this.tipoDeServicio);  
      },
      error: err => {
        console.log(err);
      }
    })
  }

  verHorarios(id:string){
    this.router.navigate([`/horarios/${id}`])
  }

  agregarLugar(){
    this.router.navigate([`agregar-lugar`])

  }

  eliminarLugar(idLugar: string) {
    this._lugaresService.eliminarLugar(idLugar).subscribe({
      next: (resp: any) => {
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  verMapa(ubicacion: string) {
    window.open(ubicacion, "_blank");
  }
}
