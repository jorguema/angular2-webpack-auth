import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestService } from '@grm-tfs-repository/token-service';

import { Country, CountryHelper } from '../models/country.model';
import { Endpoints } from '../../environments/endpoints';

@Injectable()
export class CountryService {

    constructor() { }

    getAll(): Observable<Country[]> {
        return Observable.fromPromise(RequestService.get(Endpoints.getCountries))
            .map((result: any) => CountryHelper.mapToObjectList(result));
    }
}
