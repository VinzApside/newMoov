import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechercheComponent } from './module/recherche/recherche.component';

//toastr import
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//http import
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './core/api/api.service';

//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//logger import
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { loggerInterceptor } from './core/interceptor/logger.interceptor';
import { errorInterceptor } from './core/interceptor/error.interceptor';

import { RechercheModule } from './module/recherche/recherche.module';
import { HomeModule } from './module/home/home.module';
import { NotFoundModule } from './module/notfound/notfound.module';
import { AboutModule } from './module/about/about.module';
import { HelpModule } from './module/help/help.module';
import { LinkModule } from './module/link/link.module';
import { CoreModule } from './core/core.module';
import { MymodalComponent } from './module/mymodalcomponent/mymodal.component';
import { LoginComponent } from './module/mymodalcomponent/login/login.component';
import { InscriptionComponent } from './module/mymodalcomponent/inscription/inscription.component';

@NgModule({
    declarations: [AppComponent, MymodalComponent, LoginComponent, InscriptionComponent],
    imports: [
        NgbModule,
        CoreModule,
        HomeModule,
        RechercheModule,
        AboutModule,
        NotFoundModule,
        HelpModule,
        HttpClientModule,
        LinkModule,
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        LoggerModule.forRoot({
            serverLoggingUrl: '/api/logs',
            level: NgxLoggerLevel.DEBUG,
            serverLogLevel: NgxLoggerLevel.ERROR
        })
    ],
    entryComponents: [MymodalComponent],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: loggerInterceptor, multi: true }, errorInterceptor],
    bootstrap: [AppComponent]
})
export class AppModule {}
