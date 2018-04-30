import { NgModule } from '@angular/core';

import { CountryComponent } from './country.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [TranslateModule, CommonModule],
    declarations: [CountryComponent],
    exports: [CountryComponent]
})

export class CountryModule { }