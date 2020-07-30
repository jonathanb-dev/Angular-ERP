import { Injectable } from '@angular/core';

// Angular material
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string, action?: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }

  showError(message: string, action?: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}
