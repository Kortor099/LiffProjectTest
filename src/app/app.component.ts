import { Component, OnInit } from '@angular/core';
// import { LiffService } from './liff.service';
import liff from '@line/liff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Liff_ProjectTest';

  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    // alert('????????')
    // this.liffService.liffLogin();
    liff
      .init({
        // liffId: "2005367776-kKr8zaDn", // Use own liffId
        liffId: "2006307091-PJ050Qv1", 
      })
      .then((res) => {
        alert('1111')

        // liff.ready.then(() => {
        //   // do something you want when liff.init finishes
        //   console.log('1232312123')
        // });
        if (!liff.isLoggedIn()) {
          liff.login();
        }
        // Stดart to use liff's api
      })
      .catch((err) => {
        // Error happens during initialization
        console.log(err.code, err.message);
      });

  }
}
