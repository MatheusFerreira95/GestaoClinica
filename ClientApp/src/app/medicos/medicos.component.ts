import { Component } from "@angular/core";
import { ModalService } from "../shared/services/modal.service";
import { Validators } from "@angular/forms";
import { ItensFormulario } from "../shared/formulario/formulario.component";

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
  dados = [
    {
      crm: "1234567890",
      nome: "Consultóri oX",
      valorConsulta: "R$ 300,00",
      telefone: "(37) 9 1234-1234",
      consultorios: "Consultorio x",
      acoes: ["editar", "remover"]
    }
  ];
  public itensFormulario: ItensFormulario;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.construirItensFormulario();
  }

  abrirCadastro() {
    this.modalService.exibir(this, "retornoModal");
  }

  retornoModal() {
    alert("retornoModal recebido");
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
          validadores: [Validators.maxLength(10)],
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
