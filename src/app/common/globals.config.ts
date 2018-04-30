import { Injectable } from '@angular/core';

@Injectable()
export class GlobalConfig {
    private readonly rome = "rome";
    clientName: string = null;
    token: string = null;

    hideHeader(): boolean {
        return this.hideSection();
    }

    hideSidebar(): boolean {
        return this.hideSection();
    }

    hideFooter(): boolean {
        return this.hideSection();
    }

    private hideSection(): boolean {
        if (!this.clientName) return false;
        if (this.clientName == this.rome) return true;
        return false;
    }

    getQueryParamByName(name) {
        let url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
}