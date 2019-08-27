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
  public form: FormGroup;
  @Input() itensFormulario: ItensFormulario;

  constructor() {}

  ngOnInit() {
    let formGroup = {
      nome: new FormControl("", [Validators.required, Validators.maxLength(3)])
    };

    this.itensFormulario.campos.forEach(campo => {
      formGroup[campo.id] = new FormControl("", campo.validadores);
    });

    this.form = new FormGroup(formGroup);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.itensFormulario.onSubmit();
  }

  onCancelar() {
    this.itensFormulario.onCancelar();
  }
}

export class ItensFormulario {
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
}
