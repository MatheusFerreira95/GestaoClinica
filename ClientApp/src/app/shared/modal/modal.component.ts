import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent {
  @Input() titulo: String;
  @Input() abrirModalCadastro;
  @Output() modalAcao = new EventEmitter();
  @Output() modalFechar = new EventEmitter();

  fechar() {
    this.abrirModalCadastro.ok = false;

    this.modalFechar.emit();
  }

  louco() {
    alert("www");
  }

  acao(evento) {
    this.modalAcao.emit(evento);
    this.fechar();
  }
}
