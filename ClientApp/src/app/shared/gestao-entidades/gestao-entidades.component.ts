import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ItensFormulario, Campo } from "../formulario/formulario.component";

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
  @Input() itensFormularioEdicao: ItensFormulario;
  @Output() doListar = new EventEmitter();
  @Output() doSalvar = new EventEmitter();
  @Output() doRemover = new EventEmitter();
  @Output() doEditar = new EventEmitter();
  @Output() doVincular = new EventEmitter();
  abrirModalCadastro = { ok: false };
  abrirModalEdicao = { ok: false };

  onAbrirModalCadastro() {
    this.abrirModalCadastro.ok = true;
  }
  onAbrirModalEdicao(item) {
    this.construirFormularioEdicao(item);
    this.abrirModalEdicao.ok = true;
  }
  construirFormularioEdicao(item) {
    this.itensFormularioEdicao.campos.forEach(campo => {
      let chave = campo.id;
      for (let atributo in item) {
        if (atributo === chave) {
          campo.valorInicial = item[atributo];
        }
      }
    });
    console.log(this.itensFormularioEdicao);
  }

  listar() {
    this.doListar.emit();
  }

  salvar(formulario) {
    this.fecharModalCadastro();
    this.doSalvar.emit(formulario);
  }

  remover(item) {
    this.doRemover.emit(item);
  }

  fecharModalCadastro() {
    this.abrirModalCadastro.ok = false;
  }
  fecharModalEdicao() {
    this.abrirModalEdicao.ok = false;
  }
}
