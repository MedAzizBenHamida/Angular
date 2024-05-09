import { Component, OnInit } from '@angular/core';
import { ShowroomService } from '../service/showroom.service';
import { Showroom } from '../models/showroom';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {

  listShowroom: Showroom[] = [];

  constructor(private showroomService: ShowroomService) {}

  ngOnInit(): void {
    this.showroomService.getshowroom().subscribe((data: Showroom[]) => {
      this.listShowroom = data;
      console.log(JSON.stringify(this.listShowroom));
    });
  }

  deleteShowroom(id: number): void {
    this.showroomService.deleteshowroom(id).subscribe(() => {
      console.log('Deleted');
      window.location.reload();
    });
  }


}