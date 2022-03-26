import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  onSubmit(): void {
    console.log(this.email, this.password);
    this.auth
      .authenticate({
        email: 'profdev@tindin.com.br',
        password: '123',
      })
      .subscribe((response) => {
        this.auth.login(response?.token);
      });
  }
}
