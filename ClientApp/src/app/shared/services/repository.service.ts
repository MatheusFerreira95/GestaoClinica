import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { LoaderService } from "./loader.service";
import { Notificacao } from "../notificacao/notificacao";

@Injectable({
  providedIn: "root"
})
export class RepositoryService {
  constructor(private http: HttpClient, private notificacao: Notificacao) {}

  public requisicaoGet(rota: string) {
    return this.http.get(this.getRotaCompleta(rota, environment.urlAddress));
  }

  public requisicaoPost(rota: string, body) {
    return new Promise<any>((resolve, reject) => {
      LoaderService.Loader.ativado = true;
      return this.http
        .post(
          this.getRotaCompleta(rota, environment.urlAddress),
          body,
          this.setHeaders()
        )
        .subscribe(
          this.respostaRequisicaoSucesso(resolve),
          this.respostaRequisicaoErro(reject)
        );
    });
  }

  public requisicaoPut(rota: string, body) {
    return this.http.put(
      this.getRotaCompleta(rota, environment.urlAddress),
      body,
      this.setHeaders()
    );
  }

  public requisicaoDelete(rota: string) {
    return this.http.delete(this.getRotaCompleta(rota, environment.urlAddress));
  }

  private getRotaCompleta(rota: string, envAddress: string) {
    return `${envAddress}/${rota}`;
  }

  private setHeaders() {
    return {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
  }

  private respostaRequisicaoErro(reject) {
    return (error: HttpErrorResponse) => {
      LoaderService.Loader.ativado = false;

      let mensagem =
        error.error.constructor.name === "String"
          ? error.error
          : "Erro na requisição.";
      this.notificacao.exibir(mensagem, "erro");
      reject(error);
    };
  }

  private respostaRequisicaoSucesso(resolve) {
    return (response: any) => {
      LoaderService.Loader.ativado = false;
      resolve(response);
    };
  }
}
