import { ActivatedRoute } from '@angular/router';
import { Showroom } from '../models/showroom';
import { ShowroomService } from './../service/showroom.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showshowroom',
  templateUrl: './showshowroom.component.html',
  styleUrls: ['./showshowroom.component.css']
})
export class ShowshowroomComponent implements OnInit {

  id!:number

  constructor(
   private act: ActivatedRoute,
    private ShowroomService : ShowroomService
  ){
  }
  listshowroom:Showroom[]=[]

  ngOnInit(): void {
    this.id=this.act.snapshot.params['id']
    this.ShowroomService.getbyidshowroom(this.id).subscribe((data:Showroom[])=>{
      this.listshowroom.push(data as any)
      console.log('++++++++++++'+JSON.stringify(this.listshowroom))

    })
  }
  

}
