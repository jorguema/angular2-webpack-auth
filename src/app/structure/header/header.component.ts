import { Component, OnInit } from '@angular/core';


import { AuthService } from '../../services/auth.service';
import { GlobalConfig } from '../../common/globals.config';

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    constructor(private authService: AuthService, private globalConfig: GlobalConfig) {
    }

    ngOnInit() {
    }

    checkIsLogged() {
        // return this.authService.isLogged();
    }

    logout() {
        this.authService.logout();
    }

    getUser() {
        // return this.authService.getUser();
    }

    hideHeader(): boolean {
        return this.globalConfig.hideHeader();
    }
}
