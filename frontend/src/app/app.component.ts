import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogErrorComponent } from './dialogs/dialog-error/dialog-error.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'frontend';

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
        this.openErrorDialog();
    }

    private openErrorDialog() {
        console.log('dialog opened');
        const dialogRef = this.dialog.open(DialogErrorComponent, {
            data: {
                errorCode: 400
            }
        });

        dialogRef.afterClosed().subscribe((tryAgain: boolean) => {
            if (tryAgain) {
                // Send one more request to the server
            }
        });
    }
}
