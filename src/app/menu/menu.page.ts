import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  mensaje: any;
  
  constructor(private route: ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe(params=>{
      console.log('params:',params)
      if(params && params.mensaje){
        this.mensaje = params.mensaje;
      }else{
        this.mensaje = "mensaje no recibido"
      }
    })

  }

  ngOnInit() {
  }

}
