import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  private modal: any = {};
  private contexto;
  private retorno;

  registrar(modal: any) {
    this.modal = modal;
  }

  exibir(contexto, retorno) {
    this.contexto = contexto;
    this.retorno = retorno;
    this.modal.exibir();
  }

  enviarRetorno() {
    this.contexto[this.retorno]();
  }
}
