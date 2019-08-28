import { Component, Input } from "@angular/core";
import { ModalService } from "../services/modal.service";
import { ItensFormulario } from "../formulario/formulario.component";

@Component({
  selector: "gestao-entidades",
  templateUrl: "gestao-entidades.component.html",
  styleUrls: ["./gestao-entidades.component.scss"]
})
export class GestaoEntidadesComponent {
  @Input() colunas: string[];
  @Input() dados;
  @Input() titulo: String;
  @Input() itensFormulario: ItensFormulario;
  //@Input() rota: String;
  //@Input() metodo: String;

  constructor(private modalService: ModalService) {}

  exibirModal() {
    this.modalService.exibir(this, "retornoModal");
  }

  retornoModal() {
    alert("retornoModal recebido");
  }
}
