import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: null,
    password: null,
  };

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.logout();
  }

  onSubmit(): void {
    console.log(this.user);
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
