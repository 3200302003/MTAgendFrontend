import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login:string = "assets/img/login.png";
  loginForm: FormGroup

  
  constructor(private router: Router, private loginService: LoginService) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  

  ngOnInit() {
  }

  registrar(){
    this.router.navigate(['/registrar-user'])
  }

  iniciarSesion(){
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    
    this.loginService.iniciarSesion({email: email, password: password}).subscribe({
      next: (resp: any) => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        localStorage.setItem('bienvenida', resp.msj);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
