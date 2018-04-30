import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { GlobalConfig } from '../common/globals.config';
import { TokenSvc } from './token.service';
import { UserService } from './user.service';

@Injectable()
export class InitializeService {

    constructor(
        private localStorageService: LocalStorageService,
        private globalConfig: GlobalConfig,
        private tokenSvc: TokenSvc,
        private userService: UserService
    ) { }

    initializeApp(): Promise<any> {
        return new Promise((resolve) => {
            let token = this.globalConfig.getQueryParamByName("token") || this.localStorageService.getItem("token");
            let client = this.globalConfig.getQueryParamByName("client");

            this.globalConfig.token = token;
            this.globalConfig.clientName = client;

            if (!token) {
                resolve();
                return
            }

            this.tokenSvc.updateToken(token).then(() => {
                this.userService.getUser().subscribe(
                    () => { resolve(); },
                    (error) => {                  
                        this.onAuthenticateFail(error);
                        resolve();
                    }
                );

            }, (error) => {
                this.onAuthenticateFail(error);
                resolve();
            });
        });
    }

    private onAuthenticateFail(error:any): void {
        console.log(error); 
        this.localStorageService.clear();
    }
}
