import { Component, OnInit } from '@angular/core';
import { HorariosService } from '../service/horarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar-horarios',
  templateUrl: './agregar-horarios.page.html',
  styleUrls: ['./agregar-horarios.page.scss'],
})
export class AgregarHorariosPage implements OnInit {

  registrarHorarioForm: FormGroup
  id_lugar:any;

  constructor(
    private _horarioService: HorariosService ,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location

  ) { 

    this.route.paramMap.subscribe(params => {
      this.id_lugar = params.get("id_lugar");
    })

    this.registrarHorarioForm = new FormGroup({
      hora: new FormControl(''),
      fecha: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }

  volver(){
    this.location.back();
  }

  registrarLugar(){
      const data ={
        hora: this.registrarHorarioForm.get('hora')?.value,
        fecha: this.registrarHorarioForm.get('fecha')?.value,
        status: this.registrarHorarioForm.get('status')?.value,
        id_lugar: this.id_lugar
      };

      this._horarioService.registrarLugar(data).subscribe({
        next: (res) =>{
          console.log("registro Exitoso !!");
          this.router.navigate([`/horarios/${this.id_lugar}`]);      
        },
        error: err => {
          console.log(err);
        }
      })
  }

  ngOnInit() {
  }

}



