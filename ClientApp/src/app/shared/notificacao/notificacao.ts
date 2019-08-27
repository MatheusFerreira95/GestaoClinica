import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Notificacao {
  constructor(private snackBar: MatSnackBar) {}

  public exibir(mensagem, tipo) {
    this.snackBar.open(mensagem, "", {
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: ["notificacao-" + tipo]
    });
  }
}
