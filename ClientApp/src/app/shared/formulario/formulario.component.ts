import { Component, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  AbstractControlOptions,
  ValidatorFn
} from "@angular/forms";
import { Notificacao } from "../notificacao/notificacao";

@Component({
  selector: "formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"]
})
export class FormularioComponent {
  @Input() itensFormulario: ItensFormulario;
  @Output() submeter = new EventEmitter();
  @Output() cancelar = new EventEmitter();
  public form: FormGroup;

  constructor(private notificacao: Notificacao) {}

  ngOnInit() {
    let formGroup = {};

    this.itensFormulario.campos.forEach(campo => {
      formGroup[campo.id] = new FormControl(
        campo.valorInicial,
        campo.validadores
      );
    });

    this.form = new FormGroup(formGroup);
  }

  public hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }

  public onSubmit() {
    if (this.form.invalid) {
      this.notificacao.exibir(
        "Por favor, preencha o formulário corretamente.",
        "erro"
      );
      return;
    }

    this.submeter.emit(this.form);
  }

  public onCancelar() {
    this.cancelar.emit(this.form);
  }
}

export class ItensFormulario {
  campos: Array<Campo> = [];
  nomeBotaoCancelar: String;
  nomeBotaoSubmit: String = "Salvar";
  style: Object = {};
  titulo: String;
}

export class Campo {
  id;
  type: String = "text";
  validadores: ValidatorFn | ValidatorFn[] | AbstractControlOptions = [];
  nome: String;
  placeholder: String;
  formControlName: String;
  valorInicial: String = "";
  mask: String = "";
}
