import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkComponent } from './module/park/park.component';

//toastr import
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//http import
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './core/api/api.service';

//logger import
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { loggerInterceptor } from './interceptor/logger.interceptor';
import { errorInterceptor } from './interceptor/error.interceptor';

import { ParkModule } from './module/park/park.module';
import { HomeModule } from './module/home/home.module';
import { NotFoundModule } from './module/notfound/notfound.module';
import { AboutModule } from './module/about/about.module';
import { HelpModule } from './module/help/help.module';
import { LinkModule } from './module/link/link.module';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        CoreModule,
        HomeModule,
        ParkModule,
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
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: loggerInterceptor, multi: true }, errorInterceptor],
    bootstrap: [AppComponent]
})
export class AppModule {}
