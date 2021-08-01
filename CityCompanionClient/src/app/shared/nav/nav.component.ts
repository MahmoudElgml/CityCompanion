import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  constructor(public _user:UserService,private _router:Router) { }
  ngOnInit(): void {
  }
  token=localStorage.getItem('token')

  onlogout(){
    this._user.logout(this.token).subscribe((res)=>{

    },(e)=>{
      console.log(e)
    },()=>{
      localStorage.removeItem('token')

      console.log("logged out successfuly and removed token from the browser")
      this._router.navigateByUrl('/user/login')
      this._user.loggedin=false

    }
    )
  }

}
