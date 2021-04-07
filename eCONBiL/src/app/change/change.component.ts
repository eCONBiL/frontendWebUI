import { createPlatform, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { BL } from '../shared/bl';
import { SingleBL } from '../shared/singleBL';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  @Input() blNumber = "";

  @Input() blNumberOnly = {
    blNumber: ""
  }

  @Input() redirectContainer = {
    blNumber: "",
    placeOfDelivery:""
  }

  @Input() changeOceanVessel = {
    blNumber: "",
    oceanVesselName:""
  }

  @Input() transferBL = { 
    blNumber: "",
    notifyPartyCompanyName: "",
    notifyPartyCompanyAddress: "",
    notifyPartyCompanyLegalForm: "",
    orderTo: "",
    orderAt: ""
  };

  @Input() depreciationBL = { 
    blNumber: "",
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
    hazardousMaterial: ""
  };

  bls: BL[] | undefined = undefined;
  bl: SingleBL| undefined = undefined;
  blNumberSubmitted: boolean;
  continuedChange: boolean;
  isChecked : boolean;
  blNegotiable : boolean;
  notNegotiable: boolean;
  checkboxIsChecked: string;
  valueOrderAt: string;
  date = new Date();
  transferForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
    console.log(this.date);
    this.notNegotiable = false;
    // this.loadAllBL();
    this.blNumberSubmitted = false;
    this.continuedChange = false;
    console.log(this.blNumberSubmitted);
    console.log(this.blNegotiable);
  }

  createForm(){
    this.transferForm = this.fb.group({
      orderTo : ["", Validators.required]
    });
  }

  // loadAllBL() {
  //   return this.dataService.getAllBL().subscribe((data: BL[]) => {
  //     this.bls = data;
  //     console.log(this.bls);
  //   })
  // }

  setTransferBL(){
    if(this.bl.orderTo !==""){
      this.valueOrderAt=this.bl.orderTo;
    }else{
      if (this.bl.consigneeName !== ""){
        this.valueOrderAt= this.bl.consigneeName;
        console.log(this.valueOrderAt);
      } else {
        this.valueOrderAt = this.bl.shipperName;
        console.log(this.valueOrderAt);
      }
    }
  
  }

  submitTransfer() {
    this.transferBL.blNumber = this.blNumber;
    console.log(this.transferBL);
    this.transferBL.orderAt = this.valueOrderAt;
    this.dataService.transferBL(this.transferBL);
    
    this.blNumberSubmitted = false;
    this.continuedChange = false;
  }

  submitDepreciation() {
    this.checkHazard();
    this.depreciationBL.blNumber = this.blNumber;
    console.log(this.depreciationBL);
    this.dataService.depreciationBL(this.depreciationBL)
    this.blNumberSubmitted = false;
    this.continuedChange = false;
  }

  submitChangeOceanVessel(){
    this.changeOceanVessel.blNumber = this.blNumber;
    console.log(this.changeOceanVessel)
    this.dataService.changeOceanVesselBL(this.changeOceanVessel)
    this.blNumberSubmitted = false;
    this.continuedChange = false;
  }

  // submitReturnWithoutLoading(){
  //   this.blNumberOnly.blNumber = this.blNumber
  //   console.log(this.blNumberOnly)
  //   this.dataService.returnWithoutLoadingBL(this.blNumberOnly)
  //   this.blNumberSubmitted = false;
  //   this.continuedChange = false;
  // }

  // submitRedirectionContainer(){
  //   this.redirectContainer.blNumber = this.blNumber;
  //   console.log(this.redirectContainer)
  //   this.dataService.redirectContainerBL(this.redirectContainer)
  //   this.blNumberSubmitted = false;
  //   this.continuedChange = false;
  // }

  submitLoadOnBoard(){
    this.blNumberOnly.blNumber = this.blNumber
    console.log(this.blNumberOnly)
    this.dataService.loadOnBoardBL(this.blNumberOnly)
    this.blNumberSubmitted = false;
    this.continuedChange = false;
  }

  submitBL(){
    console.log(this.blNumber);
    return this.dataService.getSingleBL(this.blNumber).subscribe((data: any) => {
      this.bl = data;
      this.blNumberSubmitted = true;
      console.log(this.bl);
      console.log(typeof(this.bl));
      console.log(this.bl.orderCheckbox);
      // console.log(this.checkOrderCheckbox);
      // this.checkOrderCheckbox();
      // console.log(this.checkOrderCheckbox);
      console.log(this.bl.blTransferable);
      if (this.bl.blTransferable){
        this.setTransferBL();
      }
      this.blNegotiable = this.bl.blTransferable;
      console.log(this.blNegotiable);
      if (this.bl.blNumber == "TW ECON 1000"){
        this.notNegotiable = true;
      }

      // var element = <HTMLInputElement> document.getElementById("hazMat");
      // if (this.depreciationBL.hazardousMaterial = "true"){
      //   element.checked = true;
      // } else if (this.depreciationBL.hazardousMaterial = "false"){
      //   element.checked = false;
      // }
      
    })
  }

  newBLSubmit(){
    this.blNumberSubmitted = false;
  }

  backToStart(){
    this.blNumberSubmitted = false;
    this.continuedChange = false;
  }

  routeTransferBL(){
    this.continuedChange = true;
    console.log(this.continuedChange);
    console.log(this.blNumberSubmitted);
  }

  checkHazard(){
    console.log(this.isChecked);
    if (this.isChecked == true){
      this.depreciationBL.hazardousMaterial = "true";
    } else if (this.isChecked == false){
      this.depreciationBL.hazardousMaterial = "false";
    }
  }

  // checkOrderCheckbox(){ 
  //   this.checkboxIsChecked = this.bl.orderCheckbox;
  // }


}


