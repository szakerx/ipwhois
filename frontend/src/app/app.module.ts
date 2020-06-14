import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DialogErrorComponent } from './dialogs/dialog-error/dialog-error.component';
import { DialogInformationsComponent } from './dialogs/dialog-informations/dialog-informations.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        DialogErrorComponent,
        DialogInformationsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                deps: [HttpClient],
                useFactory: HttpLoaderFactory
            },
            defaultLanguage: 'pl'
        })
    ],
    entryComponents: [
        DialogErrorComponent,
        DialogInformationsComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
