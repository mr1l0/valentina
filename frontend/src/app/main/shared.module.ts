import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MatCommonModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from "@auth0/angular-jwt";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule        
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
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
          return     localStorage.getItem('access_token');}
      }
    })     
  ]
})
export class SharedModule { }
