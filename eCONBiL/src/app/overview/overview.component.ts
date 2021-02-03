import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { BL } from '../shared/bl';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() blKey = ""

  bls: BL[] | undefined = undefined;
  bl: BL | undefined = undefined;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.loadAllBL()
    
  }

  loadAllBL() {
    return this.dataService.getAllBL().subscribe((data: BL[]) => {
      this.bls = data;
      console.log(this.bls)
    })
  }

  loadSingleBL() {
    return this.dataService.getSingleBL(this.blKey).subscribe((data: BL) => {
      this.bl = data;
      console.log(this.bl)
      console.log(this.bl.record.blNumber)
    })
  }

  

}
