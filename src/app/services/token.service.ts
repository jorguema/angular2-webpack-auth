import { Injectable } from '@angular/core';

import { RequestService, TokenService } from '@grm-tfs-repository/token-service';
import { LocalStorageService } from './local-storage.service';

import { Endpoints } from '../../environments/endpoints';
import { Environment } from '../../environments/environment';

@Injectable()
export class TokenSvc {

    constructor(
        private localStorageService: LocalStorageService) { }

    getToken(username, password): Promise<any> {
        TokenService.setApiUrl(Endpoints.token);
        return TokenService.getToken(username, password, Environment.appId).then((response) => {
            this.localStorageService.setItem('token', response);
            RequestService.setToken(response);
            return response;

        });
    }

    updateToken(token): Promise<any> {
        TokenService.setApiUrl(Endpoints.token);
        return TokenService.updateToken(token).then((response) => {
            this.localStorageService.setItem('token', token);
            RequestService.setToken(token);
            return response;

        });

    }
}

