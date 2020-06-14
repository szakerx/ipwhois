import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogErrorComponent } from './dialogs/dialog-error/dialog-error.component';
import { DialogInformationsComponent } from './dialogs/dialog-informations/dialog-informations.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'frontend';

    constructor(public dialog: MatDialog) { }

    // Just a way to test error dialog. 
    public openErrorDialog() {
        const dialogRef = this.dialog.open(DialogErrorComponent, {
            data: {
                errorCode: 400
            }
        });

        dialogRef.afterClosed().subscribe((tryAgain: boolean) => {
            if (tryAgain) {
                // Resend request to the server
                console.log('Resend request');
            }
        });
    }

    public openInformationsDialog() {
        const dialogRef = this.dialog.open(DialogInformationsComponent);

        dialogRef.afterClosed().subscribe((tryAgain: boolean) => {
            if (tryAgain) {
                // Resend request to the server
                console.log('Resend request');
            }
        });
    }
}
