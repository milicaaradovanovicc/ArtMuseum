import { Component, Input } from '@angular/core';
import { Artwork } from 'src/app/model/artwork.model';
import { ExibitionsService } from 'src/app/services/exibitions.service';

@Component({
  selector: 'app-artwork-item',
  templateUrl: './artwork-item.component.html',
  styleUrls: ['./artwork-item.component.css'],
})
export class ArtworkItemComponent {
  @Input() artwork: Artwork = new Artwork();
  //dobije input od "roditelja" details
}
