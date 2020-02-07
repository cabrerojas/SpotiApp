import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotityService {

private token: any = 'QD1F6ehQauWnEIZkwSewHaqdcHTyfq10anaHGkdTweU8g6vsFwWwl8Yad_gTBNAarhQN4xbzcPkDJdgHmE';

  constructor( private http: HttpClient) {

    console.log('Spotity Service listo');
   }

   getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(url, { headers });
   }


   getNewReleases( ) {
    return this.getQuery('browse/new-releases')
    .pipe( map( data => data['albums'].items) );


   }


   getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map( data =>  data['artists'].items));

   }


   getArtista(id: string) {

    return this.getQuery(`artists/${ id }`);
    // .pipe(map( data =>  data['artists'].items));

   }


   getTopTracks(id: string) {

    return this.getQuery(`artists/${ id }/top-tracks?country=cl`)
            .pipe(map( data =>  data['tracks']));

   }
}
