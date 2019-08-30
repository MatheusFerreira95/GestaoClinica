import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { ItensFormulario } from "../shared/formulario/formulario.component";
import { RepositoryService } from "../shared/services/repository.service";
import { Notificacao } from "../shared/notificacao/notificacao";

@Component({
  selector: "medicos",
  templateUrl: "./medicos.component.html",
  styleUrls: ["./medicos.component.scss"]
})
export class MedicosComponent {
  labelColunas = ["crm", "nome", "telefone", "Valor da Consulta", "Ações"];
  valorColunas = ["crm", "nome", "telefone", "valorConsulta", "acoes"];
  medicos = [];
  public itensFormulario: ItensFormulario;

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
      this.listarMedicos();
    });
  }

  listarMedicos() {
    this.repository.requisicaoGet("Medicos/Listar").then(result => {
      this.medicos = result;
    });
  }

  salvar(formulario) {
    let medico = formulario.value;
    this.repository.requisicaoPost("Medicos/Cadastrar", medico).then(result => {
      this.notificacao.exibir(result.mensagem, "sucesso");
      this.listarMedicos();
    });
    formulario.reset();
  }

  private construirItensFormulario() {
    this.itensFormulario = {
      campos: [
        {
          id: "CRM",
          type: "text",
          mask: "",
          validadores: [Validators.required, Validators.maxLength(10)],
          placeholder: "CRM",
          nome: "CRM",
          formControlName: "CRM",
          valorInicial: ""
        },
        {
          id: "Nome",
          type: "text",
          mask: "",
          validadores: [Validators.maxLength(100)],
          placeholder: "Nome",
          nome: "Nome",
          formControlName: "Nome",
          valorInicial: ""
        },
        {
          id: "Telefone",
          type: "text",
          mask: "(00) 0000-0000",
          validadores: [Validators.maxLength(20)],
          placeholder: "Telefone",
          nome: "Telefone",
          formControlName: "Telefone",
          valorInicial: ""
        },
        {
          id: "ValorConsulta",
          type: "text",
          mask: "0*,00",
          validadores: [],
          placeholder: "Valor da Consulta (R$)",
          nome: "ValorConsulta",
          formControlName: "ValorConsulta",
          valorInicial: ""
        }
      ],
      nomeBotaoSubmit: "Salvar",
      nomeBotaoCancelar: "Cancelar",
      style: {
        "box-shadow": "none"
      },
      titulo: "Novo Médico"
    };
  }
}
