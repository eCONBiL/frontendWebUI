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

  @Input() blNumber = ""

  @Input() tranferBL = { 
    blNumber: "",
    notifyPartyCompanyName: "",
    notifyPartyCompanyAddress: "",
    notifyPartyCompanyLegalForm: "",
    orderTo: "",
    orderAt: ""
  }

  bls: BL[] | undefined = undefined;
  bl: SingleBL| undefined = undefined;
  blNumberSubmitted: boolean;
  continuedChange: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
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

  submitBL(){
    console.log(this.blNumber);
    return this.dataService.getSingleBL(this.blNumber).subscribe((data: any) => {
      this.bl = data;
      this.blNumberSubmitted = true;
      console.log(this.bl)
      console.log(typeof(this.bl))
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
}


