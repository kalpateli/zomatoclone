import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {


  apiEndPoint : string ="https://freeapi.miniprojectideas.com/api/zomato/";
  constructor(private http : HttpClient) { }


  //https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory
  getAllFoods():Observable<any>{
    return this.http.get(this.apiEndPoint + "GetAllFoodCategory");
  }



  //https://freeapi.miniprojectideas.com/api/zomato/GetRestaurantServingByCategoryId
  getRestaurantByCategoryId( foodCategoryId : number) : Observable<any>{
    return this.http.get(this.apiEndPoint + "GetRestaurantServingByCategoryId?categoryId=" + foodCategoryId)
  }

  //https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemOfRestaurantByCategory
  getFoodItemOfRestaurantByCategory(foodCategoryId : number , restaurantId :number) : Observable<any>{
    return this.http.get(this.apiEndPoint + "GetFoodItemOfRestaurantByCategory?restaurantId=" + restaurantId +  "&categoryId=" + foodCategoryId)
  }
}
