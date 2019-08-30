import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { ItensFormulario } from "../shared/formulario/formulario.component";
import { RepositoryService } from "../shared/services/repository.service";
import { Notificacao } from "../shared/notificacao/notificacao";

@Component({
  selector: "consultorios",
  templateUrl: "./consultorios.component.html",
  styleUrls: ["./consultorios.component.scss"]
})
export class ConsultoriosComponent {
  valorColunas = ["nome", "endereco", "telefone", "acoes"];
  labelColunas = ["nome", "endereço", "telefone", "ações"];
  consultorios = [];
  itensFormulario: ItensFormulario;

  constructor(
    private repository: RepositoryService,
    private notificacao: Notificacao
  ) {}

  ngOnInit() {
    this.construirItensFormulario();
  }

  ngAfterViewInit() {
    // Por incrível que pareça o blog do Angular recomenda o uso de timeout: https://blog.angular-university.io/angular-debugging/
    setTimeout(() => {
      this.listarConsultorios();
    });
  }

  listarConsultorios() {
    this.repository.requisicaoGet("Consultorios/Listar").then(result => {
      this.consultorios = result;
    });
  }

  salvar(formulario) {
    let consultorio = formulario.value;
    this.repository
      .requisicaoPost("Consultorios/Cadastrar", consultorio)
      .then(result => {
        this.notificacao.exibir(result.mensagem, "sucesso");
        this.listarConsultorios();
      });
    formulario.reset();
  }

  private construirItensFormulario() {
    this.itensFormulario = {
      campos: [
        {
          id: "nome",
          type: "text",
          mask: "",
          validadores: [Validators.maxLength(100)],
          placeholder: "Nome",
          nome: "nome",
          formControlName: "nome",
          valorInicial: ""
        },
        {
          id: "endereco",
          type: "text",
          validadores: [Validators.required, Validators.maxLength(200)],
          placeholder: "Endereço",
          nome: "endereco",
          formControlName: "endereco",
          valorInicial: "",
          mask: ""
        },
        {
          id: "telefone",
          type: "text",
          mask: "(00) 0000-0000",
          validadores: [Validators.required, Validators.maxLength(20)],
          placeholder: "Telefone",
          nome: "telefone",
          formControlName: "telefone",
          valorInicial: ""
        }
      ],
      nomeBotaoSubmit: "Salvar",
      nomeBotaoCancelar: "Cancelar",
      style: {
        "box-shadow": "none"
      },
      titulo: "Novo Consultório"
    };
  }
}
