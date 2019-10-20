import { Injectable } from '@angular/core';


@Injectable({
  providedIn: "root"
})
export class ConfirmationModalService {
  modalVisible = false;

  constructor() {}

  showModal(): void {
    this.modalVisible = true;
  }

  hideModal(): void {
    this.modalVisible = false;
  }
}
