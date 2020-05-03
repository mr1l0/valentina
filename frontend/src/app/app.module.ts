import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewUserComponent } from './view/user/new-user/new-user.component';
import { LoginComponent } from './view/login/login.component';
import { JwtModule } from "@auth0/angular-jwt";
import { MainModule } from './main/main.module';
import { SharedModule } from './main/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [    
    AppComponent
  ],
  imports: [
    SharedModule,
    MainModule,      
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
          return     localStorage.getItem('access_token');}
      }
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
