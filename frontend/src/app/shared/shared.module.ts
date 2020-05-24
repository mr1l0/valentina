import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import {
  MatCommonModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatListModule,
  MatSnackBarModule,
} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MatCommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,    
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCommonModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatListModule,
    MatSnackBarModule,
    TextMaskModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatCommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCommonModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatListModule,
    MatSnackBarModule,
    TextMaskModule
  ]
})
export class SharedModule {}
