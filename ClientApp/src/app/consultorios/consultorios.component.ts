import { Component } from "@angular/core";
import { ModalService } from "../shared/services/modal.service";
import { Validators } from "@angular/forms";
import { ItensFormulario } from "../shared/formulario/formulario.component";

@Component({
  selector: "consultorios",
  templateUrl: "./consultorios.component.html",
  styleUrls: ["./consultorios.component.scss"]
})
export class ConsultoriosComponent {
  colunas: string[] = ["nome", "endereco", "telefone", "acoes"];
  dados = [
    {
      nome: "Consultóri oX",
      endereco: "Rua Professor X, numero 123, bairro Zona Sul. Lavras/MG",
      telefone: "(37) 9 1234-1234"
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
          id: "nome",
          type: "text",
          validadores: [Validators.required],
          placeholder: "Nome",
          nome: "nome",
          formControlName: "nome",
          valorInicial: ""
        },
        {
          id: "endereco",
          type: "text",
          validadores: [Validators.required],
          placeholder: "Endereço",
          nome: "endereco",
          formControlName: "endereco",
          valorInicial: ""
        }
      ],
      nomeBotaoSubmit: "Salvar",
      nomeOnCancelar: "cancelar",
      nomeBotaoCancelar: "Cancelar",
      style: {
        "box-shadow": "none"
      },
      titulo: "Novo Consultório"
    };
  }
}
