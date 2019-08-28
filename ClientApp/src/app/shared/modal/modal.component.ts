import { Component, ElementRef, Input, OnInit, OnDestroy } from "@angular/core";
import { ModalService } from "../services/modal.service";

@Component({
  selector: "modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit, OnDestroy {
  private elementoHTML: any;
  @Input() titulo: String;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.elementoHTML = el.nativeElement;
  }

  ngOnInit() {
    document.body.appendChild(this.elementoHTML);
    this.modalService.registrar(this);
  }

  ngOnDestroy() {
    this.elementoHTML.remove();
  }

  exibir() {
    this.elementoHTML.style.display = "block";
    document.body.classList.add("modal-open");
  }

  fechar() {
    this.modalService.enviarRetorno();
    this.elementoHTML.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}
