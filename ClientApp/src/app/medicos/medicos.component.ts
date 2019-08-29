import { Component } from "@angular/core";
import { ModalService } from "../shared/services/modal.service";
import { Validators } from "@angular/forms";
import { ItensFormulario } from "../shared/formulario/formulario.component";
import { RepositoryService } from "../shared/services/repository.service";

@Component({
  selector: "medicos",
  templateUrl: "./medicos.component.html",
  styleUrls: ["./medicos.component.scss"]
})
export class MedicosComponent {
  labelColunas = [
    "crm",
    "nome",
    "telefone",
    "Valor da Consulta",
    "Consultórios",
    "Ações"
  ];
  valorColunas = [
    "crm",
    "nome",
    "telefone",
    "valorConsulta",
    "consultorios",
    "acoes"
  ];
  medicos = [];
  public itensFormulario: ItensFormulario;

  constructor(
    private repository: RepositoryService,
    private modalService: ModalService
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

  onRetornoModal(opcao, objeto) {
    switch (opcao) {
      case "cadastrar":
        this.cadastrarMedico(objeto);
        break;
      case "editar":
        //this.editarMedico();
        break;
      default:
        break;
    }
  }

  cadastrarMedico(medico) {
    this.repository.requisicaoPost("Medicos/Cadastrar", medico).then(result => {
      alert(result);
      this.listarMedicos();
    });
  }

  onAbrirCadastro() {
    this.modalService.exibir(this, this.onRetornoModal);
  }

  private construirItensFormulario() {
    this.itensFormulario = {
      componentePrincipal: this,
      nomeOnSubmit: "salvar",
      campos: [
        {
          id: "crm",
          type: "text",
          mask: "",
          validadores: [Validators.required, Validators.maxLength(10)],
          placeholder: "CRM",
          nome: "crm",
          formControlName: "crm",
          valorInicial: ""
        },
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
          id: "telefone",
          type: "text",
          mask: "(00) 0000-0000",
          validadores: [Validators.maxLength(20)],
          placeholder: "Telefone",
          nome: "telefone",
          formControlName: "telefone",
          valorInicial: ""
        },
        {
          id: "valorConsulta",
          type: "text",
          mask: "0*,00",
          validadores: [],
          placeholder: "Valor da Consulta (R$)",
          nome: "valorConsulta",
          formControlName: "valorConsulta",
          valorInicial: ""
        }
      ],
      nomeBotaoSubmit: "Salvar",
      nomeOnCancelar: "cancelar",
      nomeBotaoCancelar: "Cancelar",
      style: {
        "box-shadow": "none"
      },
      titulo: "Novo Médico"
    };
  }
}
