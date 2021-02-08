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
    blNumber: "",
    dateOfIssue: "",
    placeOfIssue: "",
    numberOfBLIssued: "1",
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
    notifyPartySameAs: "",
    incoterms: "",
    freightChargesCurrency: "",
    prepaid: "",
    collect: "",
    portOfLoading: "",
    portOfDischarge: "",
    placeOfReceipt: "",
    placeOfDelivery: "",
    oceanVesselName: "",
    containerNumber: "",
    fullContainerLoad: "",
    lessThenContainerLoad: "",
    cargoRecievedDate: "",
    shippedOnBoardDate: "",
    marksAndNumbers: "",
    numberOfPackages: "1",
    grossWeight: "1",
    grossWeightUnit: "",
    descriptionOfGoods: "",
    descriptionPerPackage: "",
    measurement: "1.1",
    measurementUnit: "",
    declaredCargoValueAmount: "1",
    declaredCargoValueCurrency: "",
    additionalInformation: "",
    hazardousMaterial: "false",
    customerOrderNumber: "1",
    transportConditions: "",
    applieableLaw: "",
    placeOfJurisdiction: "",
    orderDate: "",
    orderTo: "",
    orderAt: "",
    blTransferable: "", 
  }

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() { 

  }

  test:SingleBL
  isChecked : boolean;

  addBL() {
    this.checkHazard();
    this.test = this.blDetails;
    console.log(typeof(this.test));
    console.log(this.test.blNumber);
    console.log(this.test.fullContainerLoad);
    console.log(this.test.lessThenContainerLoad);
    console.log(this.test);
    this.dataService.createBL(this.test)
    
    // .subscribe((data: {}) => {
    //   console.log(data)
    // })
  }

  checkContainerLoad(value: any){
    if (value == "lessThanContainerLoad"){
      this.blDetails.lessThenContainerLoad = "true";
      this.blDetails.fullContainerLoad = "false";
    } else if (value == "fullContainerLoad"){
      this.blDetails.lessThenContainerLoad = "false";
      this.blDetails.fullContainerLoad = "true";
    }
  }

  checkCurrency(value: any){
    if (value == "prepaid"){
      this.blDetails.prepaid = "true";
      this.blDetails.collect = "false";
    } else if (value == "collect"){
      this.blDetails.prepaid = "false";
      this.blDetails.collect = "true";
    }
  }

  checkHazard(){
    console.log(this.isChecked);
    if (this.isChecked == true){
      this.blDetails.hazardousMaterial = "true";
    } else if (this.isChecked == false){
      this.blDetails.hazardousMaterial = "false";
    }
  }

}
