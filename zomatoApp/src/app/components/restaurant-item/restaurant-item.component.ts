import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent {

  currentCategoryId : number = 0;
  currentRestaurantId : number = 0;
  foodItem : any[] =[];
  constructor( private activatedRoute : ActivatedRoute, private foodService : FoodServiceService){
    this.activatedRoute.params.subscribe((res : any)=>{
      this.currentCategoryId = res.foodId;
      this.currentRestaurantId = res.restaurant;
      this.loadFoodItem();
    })
  }

  loadFoodItem(){
    this.foodService.getFoodItemOfRestaurantByCategory(this.currentCategoryId,this.currentRestaurantId).subscribe((res:any)=>{
      this.foodItem = res.data;
    })
  }


}
