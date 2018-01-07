import { Component, OnInit } from '@angular/core';
import {ListService} from '../service/list.service';
import { NgForm }   from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  lat: number = 28.6561592;
  lng: number = 77.2388316;  
  alert:boolean=false;
  failAlert:boolean=false;
  constructor(private listService:ListService,private StateData:ListService,private CityData:ListService,private SaveData:ListService) { }
 

  ngOnInit() {
   this.listService.getCountry();
  }
  onChangeCountry(countryId) {
   this.StateData.getState(countryId);
}
onChangeState(stateId) {
  this.CityData.getCity(stateId);
}

onSubmit(form: NgForm){
 this.SaveData.storeData(form.value)
 .subscribe(res => {
   if(res.status==200){
     this.alert=true; 
   }else{
   this.failAlert=true;
      
   }
 },err => {console.log(err)} ); 
}

onReset(fm:any) {
  fm.resetForm(); 
}
}
