import { Component } from "@angular/core";
import { ModalService } from "../shared/services/modal.service";

@Component({
  selector: "consultorios",
  templateUrl: "./consultorios.component.html",
  styleUrls: ["./consultorios.component.scss"]
})
export class ConsultoriosComponent {
  colunas: string[] = ["col-1", "col-2", "col-3", "col-4"];
  dados = [];

  constructor(private modalService: ModalService) {}

  abrirCadastro() {
    this.modalService.exibir(this, "retornoModal");
  }

  retornoModal() {
    alert("retornoModal recebido");
  }
}
