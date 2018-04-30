import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from '../../common/globals.config';

@Component({
    selector: 'my-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    constructor(private globalConfig: GlobalConfig) { }

    ngOnInit() { }

    hideSidebar(): boolean {
        return this.globalConfig.hideSidebar();
    }
}