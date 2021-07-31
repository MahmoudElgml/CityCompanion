import { formatCurrency } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})

export class LoginComponent implements OnInit {
  
  constructor(private _user:UserService,private _router:Router) { }
  loginform=new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
    name:new FormControl('')
  });
  
  ngOnInit(): void {}

  onsub(){
    this._user.login(this.loginform.value).subscribe((response)=>{
      localStorage.setItem('token', response.data.token)
      this._user.loggedin=true
      console.log(response)

    },(e)=>{
      console.log(e)
    },()=>{
      this._router.navigateByUrl('/')
    })
  }

}
