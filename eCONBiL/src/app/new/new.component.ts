import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { BL } from '../shared/bl';
import { SingleBL } from '../shared/singleBL';
import { Router } from '@angular/router';

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
    shippedOnBoardDate: "",
    marksAndNumbers: "",
    numberOfPackages: "",
    grossWeight: "",
    grossWeightUnit: "",
    descriptionOfGoods: "",
    descriptionPerPackage: "",
    measurement: "",
    measurementUnit: "",
    declaredCargoValueAmount: "",
    declaredCargoValueCurrency: "",
    additionalInformation: "",
    hazardousMaterial: "",
    customerOrderNumber: "",
    transportConditions: "",
    applieableLaw: "",
    placeOfJurisdiction: "",
    orderDate: "",
    orderTo: "",
    orderAt: "",
    orderCheckbox: true,
    blTransferable: true, 
  }

  constructor(
    public dataService: DataService, private router : Router
  ) { }

  ngOnInit() { 
    this.blSubmitted = false;
  }

  test : SingleBL;
  bl :SingleBL;
  isChecked : boolean;
  isCheckedOrder : boolean;
  blSubmitted: boolean;

  addBL() {
    this.checkHazard();
    this.test = this.blDetails;
    console.log(typeof(this.test));
    console.log(this.test.blNumber);
    console.log(this.test.fullContainerLoad);
    console.log(this.test.lessThenContainerLoad);
    console.log(this.test);
    console.log(this.test.orderCheckbox);
    this.test.orderCheckbox = true;
    console.log(this.test.orderCheckbox);
    this.dataService.createBL(this.test);
    this.bl = this.test;
    this.blSubmitted = true;
    // this.router.navigateByUrl('/about');

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
    console.log(this.isCheckedOrder);
    if (this.isCheckedOrder == true){
      this.blDetails.orderCheckbox = true;
    } else if (this.isCheckedOrder == false){
      this.blDetails.orderCheckbox = false;
    }
  }

  checkOrderCheckbox(){
    // console.log(this.isChecked);
    // if (this.isChecked == true){
    //   this.blDetails.hazardousMaterial = "true";
    // } else if (this.isChecked == false){
    //   this.blDetails.hazardousMaterial = "false";
    // }
    this.isCheckedOrder
  }

}
