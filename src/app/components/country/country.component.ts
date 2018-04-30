import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.model';
import { fadeInAnimation } from '../../common/animations/index.animation';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'my-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '', class: 'custom-component' }
})

export class CountryComponent implements OnInit {
    countries: Country[];

    constructor(private countryService: CountryService, private loadingService: LoadingService) { }

    ngOnInit() {
        this.getCountries();       
    }

    private getCountries() {
        this.loadingService.startLoading();
        this.countryService.getAll().subscribe(
            (data) => {
                this.countries = data;
                this.loadingService.completeLoading();
            },
            (error) => {
                //handle
                console.log(error);
                this.loadingService.stopLoading();
            })
    }
}