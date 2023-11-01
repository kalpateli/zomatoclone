import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  currentCategoryId : number = 0;
  restaurantList : any[] = [];

  constructor(private activatedRoute : ActivatedRoute , private foodService : FoodServiceService , private router : Router){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.currentCategoryId = res.id;
      this.loadRestaurants();
    })
  }


  loadRestaurants(){
    this.foodService.getRestaurantByCategoryId(this.currentCategoryId).subscribe((res:any)=>{
      this.restaurantList = res.data;
    })  
  }

  // restaurant-items/:restaurant/:foodId
  navigate(restaurantId : number){
    this.router.navigate(['/restaurant-items',restaurantId,this.currentCategoryId])
  }
}
