import { NgModule, ModuleWithProviders, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatSnackBarModule, MatProgressBarModule } from "@angular/material";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { MaterialModule } from "./material.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,

    MatSnackBarModule,
    MatProgressBarModule,
    ScrollDispatchModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ScrollDispatchModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
