import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppMaterialModule } from "./app.material.module";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { Interceptor } from "./auth/interceptor.module";

@NgModule({
  declarations: [AppComponent, MainComponent, LoginComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
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
