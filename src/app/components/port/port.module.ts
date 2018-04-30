import { NgModule } from '@angular/core';

import { PortComponent } from './port.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [TranslateModule, CommonModule],
    declarations: [PortComponent],
    exports: [PortComponent]
})

export class PortModule { }