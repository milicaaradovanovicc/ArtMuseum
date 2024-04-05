import { Component } from '@angular/core';
<<<<<<< HEAD
import { ExibitionsService } from '../services/exibitions.service';
import { Exibition } from '../model/exibition.model';
=======
>>>>>>> b90a9caef9bfbe9889c0d5304999caa13201fe96

@Component({
  selector: 'app-exibitions',
  templateUrl: './exibitions.component.html',
<<<<<<< HEAD
  styleUrls: ['./exibitions.component.css'],
})
export class ExibitionsComponent {
  constructor(private service: ExibitionsService) {}

  exibitions: Exibition[] = [];

  ngOnInit(): void {
    this.getExibitions();
  }

  getExibitions(): void {
    this.service.getAll().subscribe({
      next: (exibitions: Exibition[]) => {
        this.exibitions = exibitions;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
=======
  styleUrls: ['./exibitions.component.css']
})
export class ExibitionsComponent {

>>>>>>> b90a9caef9bfbe9889c0d5304999caa13201fe96
}
