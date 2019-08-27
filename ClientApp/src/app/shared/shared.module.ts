import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormularioComponent } from "./formulario/formulario.component";
import { AppMaterialModule } from "./app.material.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, AppMaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormularioComponent,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormularioComponent],
  entryComponents: [FormularioComponent]
})
export class SharedModule {}
