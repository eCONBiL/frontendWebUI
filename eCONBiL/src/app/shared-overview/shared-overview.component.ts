import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { SingleBL } from '../shared/singleBL';

@Component({
  selector: 'app-shared-overview',
  templateUrl: './shared-overview.component.html',
  styleUrls: ['./shared-overview.component.css']
})
export class SharedOverviewComponent implements OnInit {

  bl: SingleBL| undefined = undefined;
  private routeSub: Subscription;
  notNegotiable: boolean;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['blNumber']) //log the value of id
      this.getBLData(params['blNumber']);
    });
    this.notNegotiable = false;
    
  }

  getBLData(blNumber){
    return this.dataService.getSingleBL(blNumber).subscribe((data: any) => {
      this.bl = data;
      if (this.bl.blNumber == "TW ECON 1000"){
        this.notNegotiable = true;
      }
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
