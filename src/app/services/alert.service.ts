import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alertVisible = false;
  public errorType = 'success';
  public message = '';

  constructor() { }

  public isAlertVisible(): boolean {
    return this.alertVisible;
  }

  showAlert(type: string, message: string): void {
    this.errorType = type;
    this.message = message;
    this.alertVisible = true;
  }
}
