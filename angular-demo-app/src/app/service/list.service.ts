import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class ListService {
  CountryData: any = null;
  StateData: any = null;
  CityData: any = null;
  Status:any;
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
    // Make the HTTP request:
    
}

getCountry()
    {
    return this.http.get('http://127.0.0.1:8000/api/country').subscribe(CountryData => {      
      console.log(CountryData);
      this.CountryData = CountryData;
    });
  }

  getState(country_id)
    {
    return this.http.get('http://127.0.0.1:8000/api/state/'+country_id).subscribe(StateData => {
       
      this.StateData = StateData;
    });
  }

  getCity(state_id)
  {
  return this.http.get('http://127.0.0.1:8000/api/city/'+state_id).subscribe(CityData => {
      
    this.CityData = CityData;
  });
}

storeData(data)
{
  //console.log(JSON.stringify);
 return this.http.post('http://127.0.0.1:8000/api/items/', data).map((res: Response) => {
  
  if (res) {
      if (res.status === 200) {
          return  res;
      }
      else {
          //return [{ status: res.status, json: res }]
          return  res;
      }
  }
}).catch((error: any) => {
  if (error.status < 400 ||  error.status ===500) {
      return Observable.throw(new Error(error.status));
  }
});
}

}
