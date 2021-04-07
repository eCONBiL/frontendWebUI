import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BL } from '../shared/bl';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { SingleBL } from '../shared/singleBL';
import { responseFormat } from '../shared/responseFormat';
import { BlockInfo } from '../shared/blockInfo';

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

            blNumber: item.Record.BLNumber,
            dateOfIssue: item.Record.DateOfIssue,
            placeOfIssue: item.Record.PlaceOfIssue,

            shipperName: item.Record.ShipperName,
            shipperAddress: item.Record.ShipperAddress,
            shipperContact: item.Record.ShipperContact,
            shipperLegalForm: item.Record.ShipperLegalForm,

            consigneeName: item.Record.ConsigneeName,
            consigneeAddress: item.Record.ConsigneeAddress,
            consigneeContact: item.Record.ConsigneeContact,
            consigneeLegalForm: item.Record.ConsigneeLegalForm,

            carrierName: item.Record.CarrierName,
            carrierAddress: item.Record.CarrierAddress,
            carrierContact: item.Record.CarrierContact,
            carrierLegalForm: item.Record.CarrierLegalForm,
            carrierTrailerNumber: item.Record.CarrierTrailerNumber,

            agentCompanyName: item.Record.AgentCompanyName,
            agentCompanyLegalForm: item.Record.AgentCompanyLegalForm,
            agentCompanyAddress: item.Record.AgentCompanyAddress,

            notifyPartyCompanyName: item.Record.NotifyPartyCompanyName,
            notifyPartyCompanyAddress: item.Record.NotifyPartyCompanyAddress,
            notifyPartyCompanyLegalForm: item.Record.NotifyPartyCompanyLegalForm,
            
            incoterms: item.Record.Incoterms,

            freightChargesCurrency: item.Record.FreightChargesCurrency,
            prepaid: item.Record.Prepaid,
            collect: item.Record.Collect,

            portOfLoading: item.Record.PartOfLoading,
            portOfDischarge: item.Record.PortOfDischarge,
            placeOfReceipt: item.Record.PlaceOfReceipt,
            placeOfDelivery: item.Record.PlaceOfDelivery,
            oceanVesselName: item.Record.OceanVesselName,
            containerNumber: item.Record.ContainerNumber,
            fullContainerLoad: item.Record.FullContainerLoad, 
            lessThenContainerLoad: item.Record.LessThenContainerLoad,
            shippedOnBoardDate: item.Record.ShippedOnBoardDate,

            marksAndNumbers: item.Record.MarksAndNumbers,
            numberOfPackages: item.Record.NumberOfPackages,
            grossWeight: item.Record.GrossWeight,
            grossWeightUnit: item.Record.GrossWeightUnit,
            descriptionOfGoods: item.Record.DescriptionOfGoods,
            descriptionPerPackage: item.Record.DescriptionPerPackage,
            measurement: item.Record.Measurement,
            measurementUnit: item.Record.MeasurementUnit,
            declaredCargoValueAmount: item.Record.DeclaredCargoValueAmount,
            declaredCargoValueCurrency: item.Record.DeclaredCargoValueCurrency,
            additionalInformation: item.Record.AdditionalInformation,
            hazardousMaterial: item.Record.HazardousMaterial,

            customerOrderNumber: item.Record.CustomerOrderNumber,

            transportConditions: item.Record.TransportConditions,
            applieableLaw: item.Record.ApplieableLaw,
            placeOfJurisdiction: item.Record.PlaceOfJurisdiction,

            orderDate: item.Record.OrderDate,
            orderTo: item.Record.OrderTo,
            orderAt: item.Record.OrderAt,
            orderCheckbox: item.Record.OderCheckbox,
            blTransferable: item.Record.BlTransferable
            }
        };
        });
      }),
      retry(1),
      catchError(this.handleError)
    )
  }

  getSingleBL(blKey): Observable<SingleBL>{
    return this.http.get<any>(this.apiURL + "/singleBL/" + blKey)
    .pipe(
     map(item => {
      return {
        ...item,

        blNumber: item.BLNumber,
        dateOfIssue: item.DateOfIssue,
        placeOfIssue: item.PlaceOfIssue,
        shipperName: item.ShipperName,

        shipperAddress: item.ShipperAddress,
        shipperContact: item.ShipperContact,
        shipperLegalForm: item.ShipperLegalForm,

        consigneeName: item.ConsigneeName,
        consigneeAddress: item.ConsigneeAddress,
        consigneeContact: item.ConsigneeContact,
        consigneeLegalForm: item.ConsigneeLegalForm,

        carrierName: item.CarrierName,
        carrierAddress: item.CarrierAddress,
        carrierContact: item.CarrierContact,
        carrierLegalForm: item.CarrierLegalForm,
        carrierTrailerNumber: item.CarrierTrailerNumber,

        agentCompanyName: item.AgentCompanyName,
        agentCompanyLegalForm: item.AgentCompanyLegalForm,
        agentCompanyAddress: item.AgentCompanyAddress,

        notifyPartyCompanyName: item.NotifyPartyCompanyName,
        notifyPartyCompanyAddress: item.NotifyPartyCompanyAddress,
        notifyPartyCompanyLegalForm: item.NotifyPartyCompanyLegalForm,

        incoterms: item.Incoterms,

        freightChargesCurrency: item.FreightChargesCurrency,
        prepaid: item.Prepaid,
        collect: item.Collect,

        portOfLoading: item.PortOfLoading,
        portOfDischarge: item.PortOfDischarge,
        placeOfReceipt: item.PlaceOfReceipt,
        placeOfDelivery : item.PlaceOfDelivery,
        oceanVesselName: item.OceanVesselName,
        containerNumber: item.ContainerNumber,
        fullContainerLoad: item.FullContainerLoad, 
        lessThenContainerLoad: item.LessThenContainerLoad,
        shippedOnBoardDate: item.ShippedOnBoardDate,

        marksAndNumbers: item.MarksAndNumbers,
        numberOfPackages: item.NumberOfPackages,
        grossWeight: item.GrossWeight,
        grossWeightUnit: item.GrossWeightUnit,
        descriptionOfGoods: item.DescriptionOfGoods,
        descriptionPerPackage: item.DescriptionPerPackage,
        measurement: item.Measurement,
        measurementUnit: item.MeasurementUnit,
        declaredCargoValueAmount: item.DeclaredCargoValueAmount,
        declaredCargoValueCurrency: item.DeclaredCargoValueCurrency,
        additionalInformation: item.AdditionalInformation,
        hazardousMaterial: item.HazardousMaterial,

        customerOrderNumber: item.CustomerOrderNumber,

        transportConditions: item.TransportConditions,
        applieableLaw: item.ApplieableLaw,
        placeOfJurisdiction: item.PlaceOfJurisdiction,

        orderDate: item.OrderDate,
        orderTo: item.OrderTo,
        orderAt: item.OrderAt,
        OrderCheckbox: item.OderCheckbox,
        blTransferable: item.BlTransferable
       };
      }),
      retry(1),
      catchError(this.handleError)
    )
  }

  createBL(bl:SingleBL) {
    console.log(bl)
   this.http.post<any>(this.apiURL + '/createBL', bl ,this.httpOptions)
   .subscribe({ error: e => console.error(e) });
 }

 public getBlockInfo(): Observable<BlockInfo>{
  return this.http.get<any>(this.apiURL + "/getBlocks" )
  .pipe(
   map(item => {
    return {
      ...item,

      height: item.height,
      currentBlockHash: item.currentBlockHash,
      previousBlockHash: item.previousBlockHash
     
     };
    }),
    retry(1),
    catchError(this.handleError)
  )
}

transferBL(tranferData) {
  console.log(tranferData)
 this.http.post<any>(this.apiURL + '/transferBL', tranferData ,this.httpOptions)
 .subscribe({ error: e => console.error(e) });
}

depreciationBL(depreciationData) {
  console.log(depreciationData)
 this.http.post<any>(this.apiURL + '/depreciationBL', depreciationData ,this.httpOptions)
 .subscribe({ error: e => console.error(e) });
}

changeOceanVesselBL(changeOceanVessel) {
  console.log(changeOceanVessel)
 this.http.post<any>(this.apiURL + '/changeOceanVesselBL', changeOceanVessel,this.httpOptions)
 .subscribe({ error: e => console.error(e) });
}

// redirectContainerBL(redirectContainer) {
//   console.log(redirectContainer)
//  this.http.post<any>(this.apiURL + '/redirectContainerBL', redirectContainer ,this.httpOptions)
//  .subscribe({ error: e => console.error(e) });
// }

// returnWithoutLoadingBL(returnWithoutLoading) {
//   console.log(returnWithoutLoading)
//  this.http.post<any>(this.apiURL + '/returnWithoutLoadingBL', returnWithoutLoading,this.httpOptions)
//  .subscribe({ error: e => console.error(e) });
// }

loadOnBoardBL(loadOnBoard) {
  console.log(loadOnBoard)
 this.http.post<any>(this.apiURL + '/loadOnBoardBL',loadOnBoard ,this.httpOptions)
 .subscribe({ error: e => console.error(e) });
}

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