import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { AuthService } from '../../services/auth.service';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [RouterModule, CommonModule, TranslateModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    providers: [AuthService]
})

export class HeaderModule { }