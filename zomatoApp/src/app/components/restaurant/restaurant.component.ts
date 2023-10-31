import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit{

  currentCategoryId : number = 0;
  restaurantList : any[] = [];

  constructor(private activatedRoute : ActivatedRoute , private foodService : FoodServiceService){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.currentCategoryId = res.id;
    })
  }

  ngOnInit() : void{
    this.loadRestaurants();;
  }

  loadRestaurants(){
    this.foodService.getRestaurantByCategoryId(this.currentCategoryId).subscribe((res:any)=>{
      this.restaurantList = res.data;
    })  
  }
}
