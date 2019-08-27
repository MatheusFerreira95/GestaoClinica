import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  public requisicaoGet(rota: string) {
    return this.http.get(this.getRotaCompleta(rota, environment.urlAddress));
  }

  public requisicaoPost(rota: string, body) {
    return this.http.post(
      this.getRotaCompleta(rota, environment.urlAddress),
      body,
      this.setHeaders()
    );
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
}
