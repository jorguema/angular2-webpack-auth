export interface IEnvironment {    
    target: string
    validationApi: string,
    environmentApi: string,
    appId: number,  
    production? : boolean,
    development? : boolean,
    staging? : boolean  
}