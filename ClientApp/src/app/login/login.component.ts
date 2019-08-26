import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  usuario = { nome: "", senha: "" };

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post("http://localhost:5000/api/Login", this.usuario).subscribe(
      result => {
        localStorage.setItem("token", result["token"]);
        this.router.navigate(["/main"]);
      },
      error => console.error(error)
    );
  }
}
