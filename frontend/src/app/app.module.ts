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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatInput} from '@angular/material/input';
import { FindServerFieldComponent } from './find-server-field/find-server-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        DialogErrorComponent,
        DialogInformationsComponent,
        FindServerFieldComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
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
