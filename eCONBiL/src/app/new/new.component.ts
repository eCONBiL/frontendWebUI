import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { BL } from '../shared/bl';
import { SingleBL } from '../shared/singleBL';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @Input() blDetails = { 
    blNumber: "abc",
    dateOfIssue: "",
    placeOfIssue: "",
    numberOfBLIssued: 0,
    shipperName: "",
    shipperAddress: "",
    shipperContact: "",
    shipperLegalForm: "",
    consigneeName: "",
    consigneeAddress: "",
    consigneeContact: "",
    consigneeLegalForm: "",
    carrierName: "",
    carrierAddress: "",
    carrierContact: "",
    carrierLegalForm: "",
    carrierTrailerNumber: "",
    agentCompanyName: "",
    agentCompanyLegalForm: "",
    agentCompanyAddress: "",
    notifyPartyCompanyName: "",
    notifyPartyCompanyAddress: "",
    notifyPartyCompanyLegalForm: "",
    notifyPartySameAs: false,
    incoterms: "",
    freightChargesCurrency: "",
    prepaid: false,
    collect: false,
    portOfLoading: "",
    portOfDischarge: "",
    placeOfReceipt: "",
    placeOfDelivery: "",
    oceanVesselName: "",
    containerNumber: "",
    fullContainerLoad: false,
    lessThenContainerLoad: false,
    dateofReceived: "",
    shippedOnBoardDate: "",
    marksAndNumbers: "",
    numberOfPackages: 0,
    grossWeight: 0,
    grossWeightUnit: "",
    descriptionOfGoods: "",
    descriptionPerPackage: "",
    measurement: 0,
    measurementUnit: "",
    declaredCargoValueAmount: 0,
    declaredCargoValueCurrency: "",
    additionalInformation: "",
    hazardousMaterial: false,
    customerOrderNumber: 0,
    transportConditions: "",
    applieableLaw: "",
    placeOfJurisdiction: "",
    orderDate: "",
    orderTo: "",
    orderAt: "",
    blTransferable: false, 
  }

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() { }

  test:SingleBL

  addBL() {
    this.test = this.blDetails;
    console.log(typeof(this.test));
    console.log(this.test.blNumber);
    console.log(this.test.fullContainerLoad);
    console.log(this.test.lessThenContainerLoad);
    // this.dataService.createBL("Hallo")
    // .subscribe((data: {}) => {
    //   console.log(data)
    // })
  }

  checkContainerLoad(value: any){
    if (value == "lessThanContainerLoad"){
      this.blDetails.lessThenContainerLoad = true;
      this.blDetails.fullContainerLoad = false;
    } else if (value == "fullContainerLoad"){
      this.blDetails.lessThenContainerLoad = false;
      this.blDetails.fullContainerLoad = true;
    }
  }

}
