import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imgDefault:string = "assets/img/logoprincipal.png";
  cargandoIcon: string ="https://media.tenor.com/AwLj9fA7jqsAAAAC/recarga-okay.gif"
  isLoading = false;

  constructor(
    private router: Router,
    public loadingController: LoadingController,
    ) {
      this.cargando();
    }
    async cargando() {
      this.isLoading = true;
      await new Promise(resolve => setTimeout(resolve, 2500));
      this.isLoading = false;
      this.tipoAgenda();
    }
    
    tipoAgenda() {
      this.router.navigate(['/tipo-agenda']);
    }
}
