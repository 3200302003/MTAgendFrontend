import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LugaresAtencionService } from '../service/lugares-atencion.service';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar-lugar',
  templateUrl: './agregar-lugar.page.html',
  styleUrls: ['./agregar-lugar.page.scss'],
})
export class AgregarLugarPage implements OnInit {
  
  registrarLugarForm: FormGroup

  constructor(
    private _lugaresService: LugaresAtencionService,
    private router: Router,
    private location: Location

  ) { 
    this.registrarLugarForm = new FormGroup({
      ubicacion: new FormControl(''),
      direccion: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
    });
  }

  volver(){
    this.location.back();
  }

  registrarLugar(){
    const data ={
      ubicacion: this.registrarLugarForm.get('ubicacion')?.value,
      direccion: this.registrarLugarForm.get('direccion')?.value,
      nombre: this.registrarLugarForm.get('nombre')?.value,
      tipo: this.registrarLugarForm.get('tipo')?.value,
    };

    this._lugaresService.registrarLugar(data).subscribe({
      next: (res) =>{
        console.log("registro Exitoso !!");
        this.router.navigate(['/home']);    
      },
      error: err => {
        console.log(err);
      }
    })
  }



  ngOnInit() {
  }

}
