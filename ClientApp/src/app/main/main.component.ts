import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent {
  public conteudoSelecionado = "home";

  constructor(private router: Router) {}

  ngOnInit() {
    if (
      localStorage.getItem("token") == null ||
      !localStorage.getItem("token")
    ) {
      this.router.navigate(["/login"]);
    }
  }

  setConteudoSelecionado(sidenav, conteudo) {
    sidenav.toggle();
    this.conteudoSelecionado = conteudo;
  }

  sair() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
}
