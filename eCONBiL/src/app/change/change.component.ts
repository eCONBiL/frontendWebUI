import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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

  @Input() redirectContainer = {
    blNumber: "",
    placeOfDelivery:""
  }

  @Input() changeOceanVessel = {
    blNumber: "",
    oceanVesselName:""
  }

  @Input() tranferBL = { 
    blNumber: "",
    notifyPartyCompanyName: "",
    notifyPartyCompanyAddress: "",
    notifyPartyCompanyLegalForm: "",
    orderTo: "",
    orderAt: ""
  };

  @Input() depreciationBL = { 
    blNumber: "",
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
    hazardousMaterial: "false"
  };

  bls: BL[] | undefined = undefined;
  bl: SingleBL| undefined = undefined;
  blNumberSubmitted: boolean;
  continuedChange: boolean;
  isChecked : boolean;
  date = new Date();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.date);
    this.loadAllBL();
    this.blNumberSubmitted = false;
    this.continuedChange = false;
    console.log(this.blNumberSubmitted);
  }

  loadAllBL() {
    return this.dataService.getAllBL().subscribe((data: BL[]) => {
      this.bls = data;
      console.log(this.bls);
    })
  }

  submitTransfer() {
    this.tranferBL.blNumber = this.blNumber;
    console.log(this.tranferBL);
    this.dataService.transferBL(this.tranferBL)
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

  submitReturnWithoutLoading(){
    this.dataService.changeOceanVesselBL(this.blNumber)
    this.blNumberSubmitted = false;
    this.continuedChange = false;
  }

  submitRedirectionContainer(){
    this.redirectContainer.blNumber = this.blNumber;
    console.log(this.redirectContainer)
    this.dataService.redirectContainerBL(this.redirectContainer)
    this.blNumberSubmitted = false;
    this.continuedChange = false;
  }

  submitLoadOnBoard(){
    this.redirectContainer.blNumber = this.blNumber;
    console.log(this.redirectContainer)
    this.dataService.redirectContainerBL(this.redirectContainer)
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
}


