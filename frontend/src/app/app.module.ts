import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NewUserComponent } from "./view/user/new-user/new-user.component";
import { LoginComponent } from "./view/login/login.component";
import { JwtModule } from "@auth0/angular-jwt";
import { HomeModule } from "./view/home/home.module";
import { SharedModule } from "./shared/shared.module";
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, LoginComponent, NewUserComponent],
  imports: [
    SharedModule,
    HomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem("access_token");
        }
      }
    })
  ],
  providers: [ CurrencyPipe ],
  bootstrap: [AppComponent],
})
export class AppModule {}
