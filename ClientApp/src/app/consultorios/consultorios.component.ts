import { Component } from "@angular/core";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: "consultorios",
  templateUrl: "./consultorios.component.html",
  styleUrls: ["./consultorios.component.scss"]
})
export class ConsultoriosComponent {
  colunas: string[] = ["col-1", "col-2", "col-3", "col-4"];
  dados = ELEMENT_DATA;

  constructor() {}

  abrirCadastro() {
    alert("cadastro");
  }
}
