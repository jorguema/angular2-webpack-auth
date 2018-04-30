import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [FormsModule, CommonModule, TranslateModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]    
})

export class LoginModule { }