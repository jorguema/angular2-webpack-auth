import { Component, OnInit } from '@angular/core';
import { PortService } from '../../services/port.service';
import { Port } from '../../models/port.model';
import { fadeInAnimation } from '../../common/animations/index.animation';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'my-port',
    templateUrl: './port.component.html',
    styleUrls: ['./port.component.scss'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '', class: 'custom-component' }
})

export class PortComponent implements OnInit {
    ports: Port[];

    constructor(private portService: PortService, private loadingService: LoadingService) { }

    ngOnInit() {        
        this.getPorts();
    }

    private getPorts() {     
        this.loadingService.startLoading();  
        this.portService.getAll().subscribe(
            (data) => {
                this.ports = data;
                this.loadingService.completeLoading();
            },
            (error) => {
                //handle
                console.log(error);
                this.loadingService.stopLoading();
            })
    }
}