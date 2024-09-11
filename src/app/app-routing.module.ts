import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CloseComponent } from './close/close.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'close', component: CloseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
