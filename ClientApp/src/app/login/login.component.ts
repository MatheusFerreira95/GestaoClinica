import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) { }

  login(){
    this.http.post('http://localhost:5000/api/Login', {Nome: 'admin', Senha: 'admin'}).subscribe(result => {
      localStorage.setItem('token', result["token"]);
      this.router.navigate(['/home']); 
    }, error => console.error(error));
  }
}
