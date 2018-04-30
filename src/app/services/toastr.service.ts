import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable()
export class ToastrService {

    constructor() { }

    error(text: string, options: any = {}): void {
        toastr.error(text, options);
    }

    success(text: string, options: any = {}): void {
        toastr.success(text, options);
    }

    warning(text: string, options: any = {}): void {
        toastr.warning(text, options);
    }

    info(text: string, options: any = {}): void {
        toastr.info(text, options);
    }

    removeAll(): void {
        toastr.remove();
    }

    removeAllAnimated(): void {
        toastr.clear();
    }
}
