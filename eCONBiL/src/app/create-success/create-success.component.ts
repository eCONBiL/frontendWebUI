import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-success',
  templateUrl: './create-success.component.html',
  styleUrls: ['./create-success.component.css']
})
export class CreateSuccessComponent implements OnInit {

  title = 'Angular Form Validation Tutorial';
  angForm: FormGroup;
  cardsArray = [1,2,4,4,5,6,6,6,6,6];
  
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
 
  
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ]
    });
  }

}
