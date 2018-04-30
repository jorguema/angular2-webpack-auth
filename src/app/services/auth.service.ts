import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthService implements CanActivate {

    userName: string;

    constructor(
        private router: Router,
        private localStorageService: LocalStorageService) { }

    canActivate(): boolean {
        if (!this.checkIsLogged()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    checkIsLogged(): boolean {
        var token = this.localStorageService.getItem('token');
        if (!token) return false;

        RequestService.setToken(token);
        return true;
    }

    logout() {
        this.localStorageService.clear();
        this.router.navigate(['/login']);
    }
}
