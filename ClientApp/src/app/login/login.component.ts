import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RepositoryService } from "../shared/repository.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  usuario = { nome: "admin", senha: "admin" };
  public loginForm: FormGroup;

  constructor(private router: Router, private repository: RepositoryService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      nome: new FormControl("", [Validators.required, Validators.maxLength(3)]),
      senha: new FormControl("", [Validators.required, Validators.maxLength(3)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.repository.requisicaoPost("Login", this.usuario).subscribe(
      result => {
        localStorage.setItem("token", result["token"]);
        this.router.navigate(["/main"]);
      },
      error => {
        console.error(error);
      }
    );
  }
}
