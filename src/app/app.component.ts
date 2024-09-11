import { Component, OnInit } from '@angular/core';
import { LiffService } from './liff.service';
import liff from '@line/liff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Liff_ProjectTest';

  constructor(private liffService: LiffService,
    private router: Router
  ) { }
  ngOnInit() {
    // this.liffService.liffLogin();

    liff.init({ liffId: "2005367776-kKr8zaDn", })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
          this.router.navigate(['/login']);
        }
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
      
  }
}
