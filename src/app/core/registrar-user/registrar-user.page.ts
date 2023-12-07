import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.page.html',
  styleUrls: ['./registrar-user.page.scss'],
})
export class RegistrarUserPage implements OnInit {
  login:string = "assets/img/login.png";
  registrarForm: FormGroup

  
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { 
    this.registrarForm = new FormGroup({
      nombre: new FormControl('',  Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      sexo: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      ciudad: new FormControl(''),
    });
  }

  registrar(){
    const nuevousuario = {
      nombre: this.registrarForm.get('nombre')!.value!,
      email: this.registrarForm.get('email')!.value!,
      password: this.registrarForm.get('password')!.value!,
      sexo: this.registrarForm.get('sexo')!.value!,
      fechaNacimiento: this.registrarForm.get('fechaNacimiento')!.value!,
      ciudad: this.registrarForm.get('ciudad')!.value!
    };

    console.log(nuevousuario);
    
    this.loginService.registrarusuario(nuevousuario).subscribe({
      next: (resp: any) => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  ngOnInit() {
  }

}
