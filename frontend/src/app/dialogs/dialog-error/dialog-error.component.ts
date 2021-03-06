import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-error',
    templateUrl: './dialog-error.component.html',
    styleUrls: ['./dialog-error.component.scss']
})
export class DialogErrorComponent implements OnInit {

    private _errorCode: number;
    private _supportedErrorCodes = [400, 401, 404, 408];

    get errorCode(): number {
        return this._errorCode;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { errorCode: number },
        public translateService: TranslateService,
        private _dialogRef: MatDialogRef<DialogErrorComponent>
    ) {
        this._errorCode = data.errorCode;
    }

    ngOnInit(): void { }

    public getErrorMessage(): string {
        let errorMessage: string;
        const errorCode = this._errorCode;

        if (this._supportedErrorCodes.includes(errorCode)) {
            try {
                errorMessage = this.getSupportedErrorMessage(errorCode);
            }
            catch {
                errorMessage = this.getUnsupportedErrorCodeMessage();
            }
        }
        else {
            errorMessage = this.getUnsupportedErrorCodeMessage();
        }

        return errorMessage;
    }

    private getSupportedErrorMessage(errorCode: number): string {
        return this.translateService.instant(`ERRORS.ERROR_${errorCode}_MESSAGE`);
    }

    private getUnsupportedErrorCodeMessage(): string {
        return this.translateService.instant(`ERRORS.UNSUPPORTED_ERROR`);
    }

    onCloseDialog() {
        this.closeDialog(false);
    }

    onTryAgain() {
        this.closeDialog(true);
    }

    private closeDialog(tryAgain: boolean) {
        this._dialogRef.close(tryAgain);
    }
}