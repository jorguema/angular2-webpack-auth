import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { fadeInAnimation } from '../../common/animations/index.animation';
import { ToastrService } from '../../services/toastr.service';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'my-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '', class: 'custom-component' }
})

export class LoginComponent implements OnInit {

    loading: boolean
    model: any = {
        username: null,
        password: null
    };

    constructor(
        private router: Router,
        private loginService: LoginService,
        private userService: UserService,
        private toastrService: ToastrService,
        private translateService: TranslateService,
        private loadingService: LoadingService
    ) {
        this.loading = false;
    }

    ngOnInit() { }

    login(username: string, password: string) {
        if (!username || !password) return;

        this.loading = true;
        this.loadingService.startLoading();

        this.loginService.login(username, password).then(() => {
            this.userService.getUser().subscribe(
                () => {
                    this.loadingService.completeLoading();
                    this.router.navigate(['home']);
                    this.loading = false;                    
                },
                (error) => {
                    this.authenticationError(error, 'ERR_USER_DATA');
                }
            );

        }, (error) => {
            this.authenticationError(error, 'ERR_USER_PSW');
        });
    }

    private authenticationError(error: any, errorMessage: string) {
        console.log(error);
        this.translateService.get(errorMessage).subscribe(
            (value) => this.toastrService.error(value),
            () => this.toastrService.error(error),
        );
        this.loading = false;
        this.loadingService.stopLoading();
    }
}