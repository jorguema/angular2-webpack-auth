import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, APP_INITIALIZER } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderModule } from './structure/header/header.module';
import { SidebarModule } from './structure/sidebar/sidebar.module';
import { FooterModule } from './structure/footer/footer.module';
import { LoginModule } from './components/login/login.module';
import { NotFoundModule } from './components/not-found//not-found.module';
import { CountryModule } from './components/country/country.module';
import { PortModule } from './components/port/port.module';

import { LoginService } from './services/login.service';
import { LocalStorageService } from './services/local-storage.service';
import { TokenSvc } from './services/token.service';

import { HomeComponent } from './structure/home/home.component';
import { GlobalConfig } from './common/globals.config';
import { InitializeService } from './services/initialize.service';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserService } from './services/user.service';
import { CountryService } from './services/country.service';
import { PortService } from './services/port.service';
import { ToastrService } from './services/toastr.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { LoadingService } from './services/loading.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutes,
    HeaderModule,
    SidebarModule,
    FooterModule,
    LoginModule,
    NotFoundModule,
    CountryModule,
    PortModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SlimLoadingBarModule.forRoot()
  ],
  providers: [
    InitializeService,
    LoginService,
    LocalStorageService,
    TokenSvc,
    GlobalConfig,
    UserService,
    CountryService,
    PortService,
    ToastrService,
    LoadingService,
    { provide: APP_INITIALIZER, useFactory: initApp, deps: [InitializeService], multi: true }
  ],
  exports: [
    SlimLoadingBarModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public appRef: ApplicationRef) { }

  hmrOnInit(store) {
    console.log('HMR store', store);
  }

  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

export function initApp(initSvc: InitializeService) {
  return () => {
    return initSvc.initializeApp();
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
