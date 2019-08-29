import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ItensFormulario } from "../formulario/formulario.component";

@Component({
  selector: "gestao-entidades",
  templateUrl: "gestao-entidades.component.html",
  styleUrls: ["./gestao-entidades.component.scss"]
})
export class GestaoEntidadesComponent {
  @Input() labelColunas;
  @Input() valorColunas;
  @Input() dados;
  @Input() titulo: String;
  @Input() itensFormulario: ItensFormulario;
  @Output() abrirCadastro = new EventEmitter();

  constructor() {}
  onAbrirCadastro() {
    this.abrirCadastro.emit();
  }
}
