import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from './local-storage.service';
import { TokenSvc } from './token.service';

@Injectable()
export class LoginService {

    constructor(
        private router: Router,
        private localStorageService: LocalStorageService,
        private tokenSvc: TokenSvc) { }

    resolve(): void {
        var token = this.localStorageService.getItem('token');
        if (token) this.router.navigate(['/']);
    }

    login(username, password) {
        return this.tokenSvc.getToken(username, password);
    }

    logout() {
        this.localStorageService.clear();
    }
}

