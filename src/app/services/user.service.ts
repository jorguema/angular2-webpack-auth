import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from '@grm-tfs-repository/token-service';

import { User, UserHelper } from '../models/user.model';
import { Endpoints } from '../../environments/endpoints';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UserService {

    constructor(private localStorageService: LocalStorageService) { }

    getUser(): Observable<User> {
        return Observable.fromPromise(RequestService.get(Endpoints.user))
            .map((result: any) => {
                let user = UserHelper.mapToObject(result);
                this.localStorageService.setJsonItem('user', user);
                return user;
            });
    }
}
