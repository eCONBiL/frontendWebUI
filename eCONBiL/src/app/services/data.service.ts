import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BL } from '../shared/bl';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  apiURL = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

   public getAllBL(): Observable<BL[]>{
    return this.http.get<any>(this.apiURL + "/allBL")
    .pipe(
     map(res => {
        return res.map(item => { 
          return {
             ...item,

             key: item.Key,

             record: {
              ...item.Record,

            }
        };
        });
      }),
      retry(1),
      catchError(this.handleError)
    )
  }

  getSingleBL(blKey): Observable<BL>{
    return this.http.get<any>(this.apiURL + "/singleBL/" + blKey)
    // .pipe(
    //   map(res => {
    //      return res.map(item => { 
    //        return {
    //           ...item,
 
    //           key: item.Key,
 
    //           record: {
    //            ...item.Record,
 
    //          }
    //      };
    //      });
    //    }),
    //    retry(1),
    //    catchError(this.handleError)
    //  )
  }

//  setNewOwner(carIndex, newOwner): Observable<any>{
//     return this.httpClient.put<any>(this.REST_API_SERVER + "changeowner/" + carIndex +"/" + newOwner, httpOptions);
//   }


  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
  
}