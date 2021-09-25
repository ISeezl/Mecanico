import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  nombreUsuario: string;

  constructor(private router:Router) { }

  goToMenu(){
    
    
    if(this.nombreUsuario == null){
      let navigationExtras:NavigationExtras = {
        queryParams:{
            mensaje: '-----'
        }
      }
      this.router.navigate(['/menu'],navigationExtras)
      
    }else{
    let navigationExtras:NavigationExtras = {
      queryParams:{
          mensaje: this.nombreUsuario
      }
    }
    this.router.navigate(['/menu'],navigationExtras)
    }

  }

  
 

  ngOnInit() {
  }


}

