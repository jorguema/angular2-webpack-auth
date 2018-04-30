import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from '../../common/globals.config';

@Component({
    selector: 'my-footer',
    templateUrl: './footer.component.html',
    styleUrls: []
})

export class FooterComponent implements OnInit {

    constructor(private globalConfig: GlobalConfig) { }

    ngOnInit() { }

    hideFooter(): boolean {
        return this.globalConfig.hideFooter();
    }
}