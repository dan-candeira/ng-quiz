import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardSevice } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardSevice] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
