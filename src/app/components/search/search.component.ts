import { Component } from '@angular/core';
import { SpotityService } from '../../services/spotity.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  loading: boolean;
  artistas: any [] = [];
  constructor(private spotify: SpotityService) { }

  buscar(termino: string) {
    this.loading = true;
    console.log(termino);
   this.spotify.getArtistas(termino)
   .subscribe((data: any) => {
     console.log(data);
     this.artistas = data;
     this.loading = false;
       });

  }
}
