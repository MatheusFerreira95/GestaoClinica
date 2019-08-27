import { Component, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControlOptions,
  ValidatorFn
} from "@angular/forms";

@Component({
  selector: "formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"]
})
export class FormularioComponent {
  @Input() itensFormulario: ItensFormulario;
  public form: FormGroup;

  constructor() {}

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
      return;
    }

    this.itensFormulario.onSubmit(
      this.itensFormulario.bindComponentePai,
      this.form.value
    );
  }

  public onCancelar() {
    this.itensFormulario.onCancelar();
  }
}

export class ItensFormulario {
  bindComponentePai;
  onSubmit: Function;
  onCancelar: Function;
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
}
