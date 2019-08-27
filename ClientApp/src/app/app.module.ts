import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";

import { Interceptor } from "./shared/auth/interceptor.module";

@NgModule({
  declarations: [AppComponent, MainComponent, LoginComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    Interceptor,
    RouterModule.forRoot([
      { path: "main", component: MainComponent },
      { path: "login", component: LoginComponent },
      { path: "**", redirectTo: "/main" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
