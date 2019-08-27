import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoaderService {
  public static Loader = { ativado: false };
}
