import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
// import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor( 
    private router: Router,
    private authService: AuthService,
   ) {}

  isLogin: boolean = false;
  loginFailed = false;
  onLogin() {
    const username = this.username;
    const password = this.password;
    this.authService.authLoginUser(username, password).subscribe({
      next: (res: any) => {
        if (res.message == 'incorect password') {
          // this.toast.error({
          //   detail: 'การล็อคอินเข้าสู่ระบบ ไม่สำเร็จ',
          //   summary: 'กรุณากรอก Password ให้ถูกต้อง',
          //   duration: 3300,
          // });
         
          this.router.navigate(['/login']);
        } else {
          this.authService.setLogin(res, username);
          this.loginFailed = false;
          console.log("yes",this.authService.getlogin());
          
          // this.toast.success({
          //   detail: 'การล็อคอินเข้าสู่ระบบ',
          //   summary: 'สำเร็จ',
          //   duration: 3300,
          // });
          
          this.router.navigate(['/close']);
        }
      },
      error: (error) => {
        this.loginFailed = true;
      },
    });
  }
}
