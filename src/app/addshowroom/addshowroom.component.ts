import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowroomService } from '../service/showroom.service';
import { Router } from '@angular/router';
import { Showroom } from '../models/showroom';
@Component({
  selector: 'app-addshowroom',
  templateUrl: './addshowroom.component.html',
  styleUrls: ['./addshowroom.component.css']
})
export class AddshowroomComponent implements OnInit {
  formShowroom!: FormGroup;
  showroom: Showroom = {
    id: 1,
    matricule: '',
    nom: '',
    status: true
  };

  constructor(
    private showroomService: ShowroomService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.formShowroom = new FormGroup({
     
        matricule: new FormControl('', [Validators.required, Validators.pattern(/^[\w*]+$/)]),
        nom: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^[A-Z][a-zA-Z]{9,}$/)]),
            status: new FormControl(this.showroom.status, Validators.required)
    });
  }

  add(): void {
    this.showroomService.addshowroom(this.formShowroom.value).subscribe(() => {
      console.log('added');
      this.route.navigate(['/showroom']);
    });
  }
}