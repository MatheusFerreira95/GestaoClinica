import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private http: HttpClient) { }

  login(){
    this.http.post('http://localhost:5000/api/Login', {Nome: 'admin', Senha: 'admin'}).subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}
