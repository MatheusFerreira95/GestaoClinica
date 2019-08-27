import { Component, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
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
  public form: FormGroup;

  constructor(private notificacao: Notificacao) {}

  ngOnInit() {
    this.notificacao.exibir("teste", "sucesso");
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

    this.itensFormulario.componentePrincipal[this.itensFormulario.nomeOnSubmit](
      this.form.value
    );
  }

  public onCancelar() {
    this.itensFormulario.nomeOnCancelar();
  }
}

export class ItensFormulario {
  componentePrincipal; // componente (ou tela) que utiliza o formulario.component
  nomeOnSubmit;
  nomeOnCancelar;
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
