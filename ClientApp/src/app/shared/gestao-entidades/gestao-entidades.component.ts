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
  @Output() doListar = new EventEmitter();
  @Output() doSalvar = new EventEmitter();
  abrirModalCadastro = { ok: false };

  constructor() {}
  onAbrirModalCadastro() {
    this.abrirModalCadastro.ok = true;
  }

  listar() {
    this.doListar.emit();
  }

  salvar(formulario) {
    this.fecharModalCadastro(formulario);
    this.doSalvar.emit(formulario);
  }

  fecharModalCadastro(formulario) {
    this.abrirModalCadastro.ok = false;
    formulario.reset();
  }
}
