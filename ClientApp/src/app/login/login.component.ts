import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RepositoryService } from "../shared/repository.service";
import { ItensFormulario } from "../shared/formulario/formulario.component";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  usuario = { nome: "admin", senha: "admin" };
  public loginForm: FormGroup;
  public itensFormulario: ItensFormulario;

  constructor(private router: Router, private repository: RepositoryService) {}

  ngOnInit() {
    this.itensFormulario = {
      onSubmit: this.login,
      campos: [
        {
          id: "nome",
          type: undefined,
          validadores: [Validators.required, Validators.maxLength(3)],
          placeholder: "Nome de Usuário",
          nome: "nome",
          formControlName: "nome"
        }
      ],
      nomeBotaoSubmit: "Entrar",
      onCancelar: undefined,
      nomeBotaoCancelar: undefined,
      style: {
        width: "40%",
        "margin-top": "20vh",
        "margin-left": "30%",
        "text-align": "center"
      },
      titulo: "Acessar"
    };
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  public login = () => {
    this.repository.requisicaoPost("Login", this.usuario).subscribe(
      result => {
        localStorage.setItem("token", result["token"]);
        this.router.navigate(["/main"]);
      },
      error => {
        console.error(error);
      }
    );
  };
}
