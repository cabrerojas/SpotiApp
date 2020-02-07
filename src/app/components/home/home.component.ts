import { Component, OnInit } from '@angular/core';
import { SpotityService } from '../../services/spotity.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

loading: boolean;
  nuevasCanciones: any[] = [];

  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotityService  ) {
     this.error = false;
     this.loading = true;

      this.spotify.getNewReleases()
      .subscribe((data: any) => {
       this.nuevasCanciones = data;
       this.loading = false;
      }, ( errorServicio ) => {
      console.log(errorServicio);
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
      });
   }



}
