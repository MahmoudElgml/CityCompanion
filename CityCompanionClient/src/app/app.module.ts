import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { MeComponent } from './pages/user/me/me.component';
import { EditprofileComponent } from './pages/user/editprofile/editprofile.component';
import { ReviewformComponent } from './pages/review/reviewform/reviewform.component';
import { ReviewdetailsComponent } from './pages/review/reviewdetails/reviewdetails.component';
import { AddcountryComponent } from './pages/admin/addcountry/addcountry.component';
import { AddcityComponent } from './pages/admin/addcity/addcity.component';
import { AddplaceComponent } from './pages/admin/addplace/addplace.component';
import { CrudexploreComponent } from './pages/admin/crudexplore/crudexplore.component';
import { CrudjourneyComponent } from './pages/admin/crudjourney/crudjourney.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ExploreComponent } from './pages/home/explore/explore.component';
import { MostvisitedComponent } from './pages/home/mostvisited/mostvisited.component';
import { FeaturedComponent } from './pages/home/featured/featured.component';
import { HotelsComponent } from './pages/home/places/hotels/hotels.component';
import { CafeComponent } from './pages/home/places/cafe/cafe.component';
import { ShopsComponent } from './pages/home/places/shops/shops.component';
import { ResurantsComponent } from './pages/home/places/resurants/resurants.component';
import { MuseumsComponent } from './pages/home/places/museums/museums.component';
import { WalkingsComponent } from './pages/home/places/walkings/walkings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyInterceptor } from './interceptor/my.interceptor';
import { CountriesComponent } from './pages/home/explore/countries/countries.component';
import { CitiesComponent } from './pages/home/explore/cities/cities.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MeComponent,
    EditprofileComponent,
    ReviewformComponent,
    ReviewdetailsComponent,
    AddcountryComponent,
    AddcityComponent,
    AddplaceComponent,
    CrudexploreComponent,
    CrudjourneyComponent,
    HomeComponent,
    ExploreComponent,
    MostvisitedComponent,
    FeaturedComponent,
    HotelsComponent,
    CafeComponent,
    ShopsComponent,
    ResurantsComponent,
    MuseumsComponent,
    WalkingsComponent,
    CountriesComponent,
    CitiesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:MyInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
