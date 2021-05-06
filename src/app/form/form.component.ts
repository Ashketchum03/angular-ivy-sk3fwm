import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { State } from '../state';
import { District } from '../district';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  /* Arrays for State Name and District Name */
  states: State[] = [];
  districts: District[] = [];

 /*Array for filtering when Corresponded State Name is selected */
  filteredDistricts?: District[] = [];

  /* string variable for hold selected State */
  selectedState:string='';

  /* Reactive form component for Input */
  /* FormControl handle only Individual element */
  stateName = new FormControl('',Validators.required);
  districtName = new FormControl('',Validators.required);
  
  constructor() {
   }

  ngOnInit(): void {
    
  }
  /* Some Undefined Variables for Dynamic DOM manipulation */
  /* show Input button For State Name | District Name  */
  showStateInput?:boolean  
  showDistrictInput?:boolean
  
  /* TO check state selected form dropdown list or not */
  isStateSelected?:boolean 


  /* Method for event Handling - selectState
     this method shows corresponding district dropdown list */
  selectState(value:any){
    this.isStateSelected = true;
    this.selectedState = value;  
    this.filteredDistricts = this.districts.filter((item)=> item.stateName == value);
  }
  
  /* method for Add New Button click event
    this method provide functionality to Add New buttton */
  /* Show corresponding Input buttons through DOM manipulation 
    Used *ngIf directive */
  /* Argument - an ID to select functionality */
  showInput(id:any){
    if(id == 'state')
    {
      this.showStateInput = true;  
    }
    else if(id == 'district')
    {
      this.showDistrictInput = true;
    }
  }

  /* Method for Input fields functionality */
  op(type:any, id:any='del')
  {
    if(type == 'state' && id == 'add'){
      this.states.push(new State(this.stateName.value));
    }
    else if(type == 'district' && id == 'add'){
      this.districts.push(new District(this.selectedState , this.districtName.value))
      this.filteredDistricts = this.districts.filter((item)=> item.stateName == this.selectedState);
    }
      this.showDistrictInput=false;
      this.districtName.setValue('');
      this.showStateInput = false;
      this.stateName.setValue('');
  }
}
