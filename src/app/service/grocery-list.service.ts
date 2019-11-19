import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GroceryListModal} from '../model/GroceryListModal';
import {environment} from '../../environments/environment';
import {map, shareReplay, tap} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class GroceryListService {

  private EndPoint: string = environment.EndpointAPI;
  private Modal: { numberOfUnits: any; quantities: any; pricePerUnit: any };


  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get<GroceryListModal[]>(this.EndPoint + '/getAllList', httpOptions).
    pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateListData(incomingData: {quantities?: any, numberOfUnits?: any, pricePerUnit?: any}) {
    return this.http.post<any>(this.EndPoint + '/updateList',
      this.Modal = {
      quantities: incomingData.quantities,
        numberOfUnits: incomingData.numberOfUnits,
        pricePerUnit: incomingData.pricePerUnit
      }).pipe(
        map((res: GroceryListModal) => {
          shareReplay();
          return res;
        }));
  }
}
