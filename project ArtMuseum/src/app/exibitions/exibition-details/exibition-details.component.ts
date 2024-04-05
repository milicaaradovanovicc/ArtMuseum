import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artwork } from 'src/app/model/artwork.model';
import { Exibition } from 'src/app/model/exibition.model';
import { ExibitionsService } from 'src/app/services/exibitions.service';

@Component({
  selector: 'app-exibition-details',
  templateUrl: './exibition-details.component.html',
  styleUrls: ['./exibition-details.component.css'],
})
export class ExibitionDetailsComponent {
  exibitionId: number = 0;
  exibition: Exibition = new Exibition();
  artworks: Artwork[] = [];
  allArtworks: Artwork[] = [];

  showEdit: boolean = false;
  //obicna varijabla koja je false,
  //a u html sa ! je pretvorimo u true

  artworkFilter = {
    author: '',
  };

  constructor(
    private route: ActivatedRoute,
    private service: ExibitionsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.exibitionId = params['id'];
      this.getExibition();
      this.getExibitionArtworks();
      this.getAllArtworks();
    });
  }

  //ZA DOBAVLJANJE INFO O IZLOZBNI, GORNJI CARD
  getExibition(): void {
    this.service.getExibition(this.exibitionId).subscribe({
      next: (exibition: Exibition) => {
        this.exibition = exibition;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  //ZA CARDS SA UMETNICKIM DELIMA
  getExibitionArtworks(): void {
    this.service.getExibitionArtworks(this.exibitionId).subscribe({
      next: (artworks: Artwork[]) => {
        this.artworks = artworks;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  //ZA SVA UMETNICKA DELA KOJA NISU U IZLOZBI
  getAllArtworks(): void {
    this.service.getArtworks(this.artworkFilter).subscribe({
      next: (artworks: Artwork[]) => {
        this.allArtworks = artworks.filter(
          (artwork: Artwork) => artwork.exibition_id == -1
        );
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  //DODAJ DELO U IZLOZBU
  onAddArtwork(artworkId: number): void {
    this.service.addArtworkToExibition(artworkId, this.exibitionId).subscribe({
      next: () => {
        this.getAllArtworks();
        this.getExibitionArtworks();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  //UKLONI DELO IZ IZLOZBE
  onRemoveArtwork(artworkId: number): void {
    this.service
      .removeArtworkFromExibition(artworkId, this.exibitionId)
      .subscribe({
        next: () => {
          this.getAllArtworks();
          this.getExibitionArtworks();
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  onEditClicked(): void {
    this.showEdit = true;
  }

  onDoneClicked(): void {
    this.showEdit = false;
  }

  onSearchClicked(searchValue: string): void {
    this.artworkFilter.author = searchValue;
    this.getAllArtworks();
  }
}
