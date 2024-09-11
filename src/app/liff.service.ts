import liff from '@line/liff';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class LiffService {

    liffLogin() {
        liff.init({ liffId: "2005367776-kKr8zaDn", })
            .then(() => {
                if (!liff.isLoggedIn()) {
                    liff.login();
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
