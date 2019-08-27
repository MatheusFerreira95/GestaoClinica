import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "medicos",
  templateUrl: "./medicos.component.html",
  styleUrls: ["./medicos.component.scss"]
})
export class MedicosComponent {
  constructor(private router: Router) {}
}
