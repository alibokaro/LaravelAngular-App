<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Country;
use App\State;
use App\City;
use App\Client;


class HomeController extends Controller
{
    //
    public function country(){

    $countryList = Country::get();

        return $countryList;

    }

    public function state($country_id){

    $stateList = State::where('country_id', '=', $country_id)->get();

        return $stateList;

    }

    public function city($state_id){

    $cityList = City::where('state_id', '=', $state_id)->get();

        return $cityList;

    }

     public function store(Request $request)
    {
       try{
       $customerData = new Client;
      $customerData->name = $request->get('name');
      $customerData->company = $request->get('company');
      $customerData->email = $request->get('email');
      $customerData->country = $request->get('country');
      $customerData->state = $request->get('state');
      $customerData->city = $request->get('city');
      $result=$customerData->save();
      if($result)
      {
        return response()->json([
                              'msg' => 'Thanks for connecting..!',
                               'status'=>200
                               ]);
      }else{

      }
        return response()->json('Try Again..!');
    }
     catch (\Illuminate\Database\QueryException $e) {
       return response()->json('Opps Try Again..!');
    } catch (\Exception $e) {
        return response()->json('Opps something wrong Try Again..!');
    }
    }
}
