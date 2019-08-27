import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Validators } from "@angular/forms";
import { RepositoryService } from "../shared/repository.service";
import { ItensFormulario } from "../shared/formulario/formulario.component";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  public itensFormulario: ItensFormulario;

  constructor(private router: Router, private repository: RepositoryService) {}

  ngOnInit() {
    this.construirItensFormulario();
  }

  public login(that, usuario) {
    that.repository.requisicaoPost("Login", usuario).subscribe(
      result => {
        localStorage.setItem("token", result["token"]);
        that.router.navigate(["/main"]);
      },
      error => {
        console.error(error);
      }
    );
  }

  private construirItensFormulario() {
    this.itensFormulario = {
      bindComponentePai: this,
      onSubmit: this.login,
      campos: [
        {
          id: "nome",
          type: undefined,
          validadores: [Validators.required],
          placeholder: "Nome de Usuário",
          nome: "nome",
          formControlName: "nome",
          valorInicial: ""
        },
        {
          id: "senha",
          type: "password",
          validadores: [Validators.required],
          placeholder: "Senha",
          nome: "senha",
          formControlName: "senha",
          valorInicial: ""
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
}
