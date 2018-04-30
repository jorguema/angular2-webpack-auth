import { IEnvironment } from './environment.interface';

export const Environment: IEnvironment = {
  target: 'staging',
  validationApi: 'http://auth.api.desarrollo.corp',
  environmentApi: 'http://environment.api.desarrollo.corp',
  appId: 3,
  staging: true
};
