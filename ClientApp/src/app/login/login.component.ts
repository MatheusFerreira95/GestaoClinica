import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Validators } from "@angular/forms";
import { RepositoryService } from "../shared/services/repository.service";
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

  public login(usuario) {
    this.repository.requisicaoPost("Login", usuario).then(result => {
      localStorage.setItem("token", result["token"]);
      this.router.navigate(["/main"]);
    });
  }

  private construirItensFormulario() {
    this.itensFormulario = {
      componentePrincipal: this,
      nomeOnSubmit: "login",
      campos: [
        {
          id: "nome",
          type: undefined,
          validadores: [Validators.required],
          placeholder: "Nome de Usuário",
          nome: "nome",
          formControlName: "nome",
          valorInicial: "",
          mask: ""
        },
        {
          id: "senha",
          type: "password",
          validadores: [Validators.required],
          placeholder: "Senha",
          nome: "senha",
          formControlName: "senha",
          valorInicial: "",
          mask: ""
        }
      ],
      nomeBotaoSubmit: "Entrar",
      nomeOnCancelar: undefined,
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
