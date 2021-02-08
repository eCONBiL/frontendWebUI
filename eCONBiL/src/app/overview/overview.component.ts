import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { BL } from '../shared/bl';
import { SingleBL } from '../shared/singleBL';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { BlockInfo } from '../shared/blockInfo';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {


  bls: BL[] | undefined = undefined;
  bl: SingleBL| undefined = undefined;
  blockInfo : BlockInfo | undefined = undefined;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.loadAllBL();
    this.loadBlockInfo();
    
  }

  loadAllBL() {
    return this.dataService.getAllBL().subscribe((data: BL[]) => {
      this.bls = data;
      console.log(this.bls)
      console.log(this.bls[0].record.carrierTrailerNumber)
      console.log(this.bls[0].record.consigneeContact)
      console.log(this.bls[0].record.fullContainerLoad)
      console.log(this.bls[0].record.incoterms)
    })
  }

  loadBlockInfo(){
    return this.dataService.getBlockInfo().subscribe((data: BlockInfo) => {
      this.blockInfo = data;
      console.log("Hav edone it")
      console.log(this.blockInfo)
    })
  }

  // loadSingleBL() {
  //   return this.dataService.getSingleBL(this.blKey).subscribe((data: any) => {
  //     this.bl = data;
  //     console.log(this.bl)
  //     console.log(typeof(this.bl))
  //   })
  // }

  // testSingleBL() {
  
  //     console.log(this.bl.notifyPartyCompanyName)
  //     console.log(typeof(this.bl))
  //   }
  }

  


