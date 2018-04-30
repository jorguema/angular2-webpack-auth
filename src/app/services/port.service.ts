import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Port, PortHelper } from '../models/port.model';
import { Endpoints } from '../../environments/endpoints';

@Injectable()
export class PortService {

    constructor() { }

    getAll(): Observable<Port[]> {
        return Observable.fromPromise(RequestService.get(Endpoints.getPorts))
            .map((result: any) => PortHelper.mapToObjectList(result));
    }
}
