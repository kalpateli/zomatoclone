import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';

const routes: Routes = [
  // {path:'**',component:FeedComponent}, 
  {path:'',component:FeedComponent},
  {path:'restaurants/:id',component:RestaurantComponent},
  {path:'restaurant-items/:restaurant/:foodId',component:RestaurantItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
