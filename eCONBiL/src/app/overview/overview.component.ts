import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { BL } from '../shared/bl';
import { SingleBL } from '../shared/singleBL';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() blKey = ""

  bls: BL[] | undefined = undefined;
  bl: SingleBL| undefined = undefined;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.loadAllBL()
    
  }

  loadAllBL() {
    return this.dataService.getAllBL().subscribe((data: BL[]) => {
      this.bls = data;
      console.log(this.bls)
      console.log(this.bls[1].record.carrierTrailerNumber)
      console.log(this.bls[1].record.consigneeContact)
      console.log(this.bls[1].record.fullContainerLoad)
      console.log(this.bls[1].record.incoterms)
    })
  }

  loadSingleBL() {
    return this.dataService.getSingleBL(this.blKey).subscribe((data: any) => {
      this.bl = data;
      console.log(this.bl)
      console.log(typeof(this.bl))
    })
  }

  testSingleBL() {
  
      console.log(this.bl.notifyPartyCompanyName)
      console.log(typeof(this.bl))
    }
  }

  


