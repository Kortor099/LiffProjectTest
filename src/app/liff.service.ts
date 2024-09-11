import liff from '@line/liff';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class LiffService {

    constructor(private router: Router,) { }

    liffLogin() {
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

    liffClose() {
        if(liff.isLoggedIn()) {
            liff.closeWindow();
        }
    }
}
