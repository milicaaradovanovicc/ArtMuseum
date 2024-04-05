import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exibition } from 'src/app/model/exibition.model';
import { ExibitionsService } from 'src/app/services/exibitions.service';
=======
>>>>>>> b90a9caef9bfbe9889c0d5304999caa13201fe96

@Component({
  selector: 'app-new-exibition',
  templateUrl: './new-exibition.component.html',
<<<<<<< HEAD
  styleUrls: ['./new-exibition.component.css'],
})
export class NewExibitionComponent {
  exibitionForm: FormGroup;

  constructor(private service: ExibitionsService) {
    this.exibitionForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
    });
  }

  onAdd(): void {
    console.log(this.exibitionForm.value);

    let newExibition = new Exibition(this.exibitionForm.value);
    //nova varijabla newExibition dobija podatke iz forme

    if (!this.exibitionForm.valid) {
      alert('Please fill in the form');
      return;
    } //provera za validnost forme

    this.service.add(newExibition).subscribe({
      next: (exibition) => {
        console.log(exibition);
      },
      error: (err) => {
        alert(err);
      },
    });
  }
=======
  styleUrls: ['./new-exibition.component.css']
})
export class NewExibitionComponent {

>>>>>>> b90a9caef9bfbe9889c0d5304999caa13201fe96
}
