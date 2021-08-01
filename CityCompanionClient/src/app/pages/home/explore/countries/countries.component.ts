import { Component, OnInit } from '@angular/core';
import { ExploreService } from 'src/app/services/explore.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public data:any=[]
  constructor(private _explore:ExploreService) { }
  
  ngOnInit(): void {
    this._explore.getallcountries().subscribe((res)=>{
      this.data=res.data.countries
      console.log(this.data);
      
      
    })
  }

}
