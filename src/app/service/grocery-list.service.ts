import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map, shareReplay, tap} from 'rxjs/operators';
import {GroceryListModal} from '../model/groceryListModel';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class GroceryListService {

  private EndPoint: string = environment.EndpointAPI;
  private Modal: {_id: any, name: any, quantities: any; description: any,  numberOfUnits: any; pricePerUnit: any, totalAmount: any};


  constructor(private http: HttpClient) {
  }

  getAllData() {
    return this.http.get<GroceryListModal[]>(this.EndPoint + '/grocery/getAllList', httpOptions).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateListData(incomingData: { _id?: any, name?: any, quantities?: any, description?: any, numberOfUnits?: any, pricePerUnit?: any, totalAmount?: any }) {
    return this.http.post<any>(this.EndPoint + '/grocery/updateList',
      this.Modal = {
        _id: incomingData._id,
        name: incomingData.name,
        quantities: incomingData.quantities,
        description: incomingData.description,
        numberOfUnits: incomingData.numberOfUnits,
        pricePerUnit: incomingData.pricePerUnit,
        totalAmount: incomingData.totalAmount
      }, httpOptions).pipe(
      map((res: GroceryListModal) => {
        shareReplay();
        return res;
      }));
  }
}
