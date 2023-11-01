import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zomatoApp';

  registerObj : any = {
    "userId": 0,
    "userName": "string",
    "role": "string",
    "password": "string",
    "mobileNo": "string",
    "emailId": "string",
    "restaurantId": 0
  }

  loggedUserData : any;


  constructor(private userService : UserServiceService){
    const isLocalData = localStorage.getItem('zomato_user');
    if(isLocalData != null)
    {
      this.loggedUserData = JSON.parse(isLocalData)//converts string to object
    }
  }
 
  onLogOut(){
    localStorage.removeItem('zomato_user');
    this.loggedUserData = null;
  }

  onLogin(){
    const model = document.getElementById('loginModal');
    if(model != null)
    {
      model.style.display = "block";
    }
  }

  onRegister(){
    const model = document.getElementById('registerModal');
    if(model != null)
    {
      model.style.display = "block";
    }
  }

  closeRegister(){
    const model = document.getElementById('registerModal');
    if(model != null)
    {
      model.style.display = "none";
    }
  }

  closeLogin(){
    const model = document.getElementById('loginModal');
    if(model != null)
    {
      model.style.display = "none";
    }
  }

  onSave(){
    this.userService.registerNewUser(this.registerObj).subscribe((res : any)=>{
      if(res.result)
      {
        this.closeRegister();
        alert("Successfully added new User");
        localStorage.setItem('zomato_user',JSON.stringify(res.data));
        this.loggedUserData = res.data;
      }
      else{
        alert(res.message);
      }
    })
  }


  
}
