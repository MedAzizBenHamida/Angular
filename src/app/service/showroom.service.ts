import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Showroom } from '../models/showroom';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {
baseUrl='http://localhost:4200/showroom'
  constructor(private http:HttpClient) { }


  getnumber(list:any,creteria:string,value:any){
    //console.log("Bonjour 4artic6")

    let n=0
    for(let i in list){
      if(list[i][creteria]==value){
        n++
      }
    }
return n

  }


getshowroom():Observable<Showroom[]>{
  return this.http.get<Showroom[]>(this.baseUrl)

}

addshowroom(sr:Showroom):Observable<Showroom[]>{
  return this.http.post<Showroom[]>(this.baseUrl,sr)

}

deleteshowroom(id:any):Observable<Showroom[]>{
  return this.http.delete<Showroom[]>(this.baseUrl+'/'+id)

}
updateshowroom(id:any,sr:Showroom):Observable<Showroom[]>{
  return this.http.put<Showroom[]>(this.baseUrl +'/'+id,sr)

}

getbyidshowroom(id:any):Observable<Showroom[]>{
  return this.http.get<Showroom[]>(this.baseUrl+'/'+id)

}


}
