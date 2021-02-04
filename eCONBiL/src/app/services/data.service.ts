import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BL } from '../shared/bl';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { SingleBL } from '../shared/singleBL';
import { responseFormat } from '../shared/responseFormat';

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
            numberOfBLIssued: item.Record.NumberOfBLIssued,
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
            notifyPartySameAs: item.Record.NotifyPartySameAs,
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
            dateofReceived: item.Record.DateofReceived,
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
            applieableLaw: item.Record.applieableLaw,
            placeOfJurisdiction: item.Record.PlaceOfJurisdiction,
            orderDate: item.Record.OrderDate,
            orderTo: item.Record.OrderTo,
            orderAt: item.Record.OrderAt,
            blTransferable: item.Record.BlTransferable
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
    .pipe(
     map(item => {
      return {
        ...item,

          blNumber: item.BLNumber,
          dateOfIssue: item.DateOfIssue,
          placeOfIssue: item.PlaceOfIssue,
          numberOfBLIssued: item.NumberOfBLIssued,
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
          notifyPartySameAs: item.NotifyPartySameAs,
          incoterms: item.Incoterms,
          freightChargesCurrency: item.FreightChargesCurrency,
          prepaid: item.Prepaid,
          collect: item.Collect,
          portOfLoading: item.PartOfLoading,
          portOfDischarge: item.PortOfDischarge,
          placeOfReceipt: item.PlaceOfReceipt,
          placeOfDelivery: item.PlaceOfDelivery,
          oceanVesselName: item.OceanVesselName,
          containerNumber: item.ContainerNumber,
          fullContainerLoad: item.FullContainerLoad, 
          lessThenContainerLoad: item.LessThenContainerLoad,
          dateofReceived: item.DateofReceived,
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
          applieableLaw: item.applieableLaw,
          placeOfJurisdiction: item.PlaceOfJurisdiction,
          orderDate: item.OrderDate,
          orderTo: item.OrderTo,
          orderAt: item.OrderAt,
          blTransferable: item.BlTransferable
       };
      }),
      retry(1),
      catchError(this.handleError)
    )
  }


  createBL(bl:string) {
     console.log(bl)
    this.http.post<any>(this.apiURL + '/createBL', {       
      "BLNumber": "MC QTSP GHA",
      "DateOfIssue": "hgsf",
      "PlaceOfIssue": "Bremerhaven",
      "NumberOfBLIssued": 2,
      "ShipperName": "Autohaus Main GmbH",
      "ShipperAddress": "Hanauerlandstr. 3460314 Frankfurt, Germany",
      "ShipperContact": "ahmain@beispiel.de",
      "ShipperLegalForm": "GmbH",
      "ConsigneeName": "German-Cars Ldt.",
      "ConsigneeAddress": "Fue Avenue, A1 518108 Shanghai, China",
      "ConsigneeContact": "86282452253",
      "ConsigneeLegalForm": "Ldt.",
      "CarrierName": "MSC Germany S.A. & Co. KG",
      "CarrierAddress": "Hafenstraße 55, 282127 Bremen, Germany",
      "CarrierContact": "deu-bremen@msc.de",
      "CarrierLegalForm": "S.A. & Co. KG",
      "CarrierTrailerNumber": "HB-KK-596",
      "AgentCompanyName": "BLG AutoTerminal Bremerhaven GmbH & Co. KG",
      "AgentCompanyLegalForm": "GmbH & Co. KG",
      "AgentCompanyAddress": "Senator-Borttscheller-Str. 1, 27568 Bremerhaven, Germany",
      "NotifyPartyCompanyName": "German-Cars Ldt.",
      "NotifyPartyCompanyAddress": "Fue Avenue, A1 518108 Shanghai, China",
      "NotifyPartyCompanyLegalForm": "Ldt.",
      "NotifyPartySameAs": true,
      "Incoterms": "FOB (2020)",
      "FreightChargesCurrency": "USD",
      "Prepaid": true,
      "Collect": true,
      "PortOfLoading": "Bremerhaven Containerterminal",
      "PortOfDischarge": "Shanghai Yangshan",
      "PlaceOfReceipt": "Frankfurt am Main, Adresse, Germany",
      "PlaceOfDelivery": "Shanghai, Adresse, China",
      "OceanVesselName": "MSC Gulsun",
      "ContainerNumber": "OOLU1548378",
      "FullContainerLoad": true,
      "LessThenContainerLoad": false,
      "DateofReceived": "08.02.2020",
      "ShippedOnBoardDate": "09.02.2020",
      "MarksAndNumbers": "40' steel Dry Cargo Container No CSQU3054383",
      "NumberOfPackages": 15,
      "GrossWeight": 4250,
      "GrossWeightUnit": "Kg",
      "DescriptionOfGoods": "engines and fitting engine parts packaged together on pallets"
},this.httpOptions)
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