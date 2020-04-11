import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WinLossServiceService {
    public API = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getWinLoss(id:number): Observable<any>{
    return this.http.get(this.API + "/getWL/" + id);
  }
}
