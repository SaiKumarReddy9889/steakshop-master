import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BannerComponent } from "./components/banner/banner.component";
import { NavComponent } from "./components/nav/nav.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FoodCourseComponent } from "./components/food-course/food-course.component";
import { DrinksComponent } from "./components/drinks/drinks.component";
import { HomeComponent } from "./pages/home/home.component";
import { ReservationFormComponent } from "./components/reservation-form/reservation-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DailyFoodCoursesComponent } from "./components/daily-food-courses/daily-food-courses.component";
import { SliderComponent } from "./components/slider/slider.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { SliderItemDirective } from "./components/slider/slider-item.directive";
import { AssociasionComponent } from "./components/associasion/associasion.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DiamondComponent } from "./components/diamond/diamond.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    FoodCourseComponent,
    DrinksComponent,
    HomeComponent,
    ReservationFormComponent,
    DailyFoodCoursesComponent,
    SliderComponent,
    CarouselComponent,
    SliderItemDirective,
    AssociasionComponent,
    FooterComponent,
    DiamondComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
