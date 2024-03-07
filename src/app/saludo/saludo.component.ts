import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  texto:string = "";
  router: any;
  
  constructor(private route:ActivatedRoute){
        
  }

  ngOnInit(): void {
    
    this.route.params.subscribe(
        params=>{
            this.texto="Hola bienvenido"    
        }
    )
  }
  ChangeRoute(){
    const rutas = [
      '/**',
    ];
    this.router.navigate([rutas[0]]);
  }

}
