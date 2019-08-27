import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "consultorios",
  templateUrl: "./consultorios.component.html",
  styleUrls: ["./consultorios.component.scss"]
})
export class ConsultoriosComponent {
  constructor(private router: Router) {}
}
