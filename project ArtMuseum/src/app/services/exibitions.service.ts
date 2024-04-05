import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exibition } from '../model/exibition.model';
import { Observable, map } from 'rxjs';
import { Artwork } from '../model/artwork.model';

const baseUrl = 'http://localhost:3000/api/';
@Injectable({
  providedIn: 'root',
})
export class ExibitionsService {
  constructor(private http: HttpClient) {}

  //ZA GET LISTE SVIH IZLOZBI
  getAll(): Observable<Exibition[]> {
    return this.http.get(`${baseUrl}exibitions`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Exibition(elem))) || [];
      })
    );
  }

  //ZA OTVARANJE ODABRANE IZLOZBE IZ LISTE SVIH IZLOZBI
  getExibition(id: number): Observable<Exibition> {
    return this.http.get(`${baseUrl}exibitions/${id}`).pipe(
      map((data: any) => {
        return new Exibition(data);
      })
    );
  }

  //ZA DODAVANJE NOVE IZLOZBE PREKO FORME
  add(exibition: Exibition): Observable<Exibition> {
    return this.http.post(`${baseUrl}exibitions`, exibition).pipe(
      map((data: any) => {
        return new Exibition(data);
      })
    );
  }

  //ZA GET DELA ZA OTVORENU IZLOZBU
  getExibitionArtworks(exibitionId: number): Observable<Artwork[]> {
    return this.http.get(`${baseUrl}exibitions/${exibitionId}/artworks`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Artwork(elem))) || [];
      })
    );
  }

  getArtworks(filter?: any): Observable<Artwork[]> {
    let options = {
      params: new HttpParams()
        .set('filter', (filter && JSON.stringify(filter)) || '{}')
        .set('sort', 'author')
        .set('sortDirection', 'asc'),
    };
    return this.http.get(`${baseUrl}artworks`, options).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Artwork(elem))) || [];
      })
    );
  }

  //ZA DODAVANJE DELA NA OTVORENU IZLOZBU
  addArtworkToExibition(
    artworkId: number,
    exibitionId: number
  ): Observable<any> {
    return this.http.put(
      `${baseUrl}exibitions/${exibitionId}/artworks/${artworkId}`,
      {}
    );
  }

  //ZA SKLANJANJE DELA IZ IZLOZBE
  removeArtworkFromExibition(
    artworkId: number,
    exibitionId: number
  ): Observable<any> {
    return this.http.delete(
      `${baseUrl}exibitions/${exibitionId}/artworks/${artworkId}`
    );
  }
}
