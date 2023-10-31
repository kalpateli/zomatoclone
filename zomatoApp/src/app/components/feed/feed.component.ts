import { Component } from '@angular/core';
import { FoodServiceService } from 'src/app/services/food-service.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})


export class FeedComponent implements OnInit{

   foodItems : any[] =[]; //here the objects coming from the ai will be stored

    constructor(private foodService : FoodServiceService, private router : Router){}

    ngOnInit(){
      this.loadAllFoodCategory();
    }

    loadAllFoodCategory(){
      this.foodService.getAllFoods().subscribe(( res : any )=>{
        this.foodItems = res.data;   //res = result
      })
    }

    navRestaurantFoods(categoryId : number){
      this.router.navigate(['restaurants',categoryId]);
    }

  }
