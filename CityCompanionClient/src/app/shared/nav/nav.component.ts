import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public _user:UserService) { }
  ngOnInit(): void {
  }
  token=localStorage.getItem('token')

  onlogout(){
    this._user.logout(this.token).subscribe((res)=>{

    },(e)=>{
      console.log(e)
    },()=>{
      console.log("logged out successfuly")
    }
    )
  }

}
