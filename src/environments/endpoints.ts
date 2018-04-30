import { Environment } from './environment.development';

export const Endpoints = {
    //validation
    token: Environment.validationApi + '/token',
    user: Environment.validationApi + '/user',

    //environment
    getCountries: Environment.environmentApi + '/country/Get',
    getPorts: Environment.environmentApi + '/port?code=alv',
};
