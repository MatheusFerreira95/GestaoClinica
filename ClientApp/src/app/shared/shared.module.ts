import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormularioComponent } from "./formulario/formulario.component";
import { ModalComponent } from "./modal/modal.component";
import { AppMaterialModule } from "./material-components/app.material.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, AppMaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormularioComponent,
    ModalComponent,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormularioComponent, ModalComponent],
  entryComponents: [FormularioComponent, ModalComponent]
})
export class SharedModule {}
