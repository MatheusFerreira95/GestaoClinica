import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";

import { Interceptor } from "./shared/auth/interceptor.module";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { MedicosComponent } from "./medicos/medicos.component";
import { ConsultoriosComponent } from "./consultorios/consultorios.component";
import { HomeComponent } from "./home/home.component";
import { GestaoEntidadesComponent } from "./shared/gestao-entidades/gestao-entidades.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    MedicosComponent,
    ConsultoriosComponent,
    HomeComponent,
    GestaoEntidadesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSnackBarModule,
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
