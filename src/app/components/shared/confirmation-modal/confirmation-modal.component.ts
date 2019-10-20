import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";



@Component({
  selector: "wf-confirmation-modal",
  templateUrl: "./confirmation-modal.component.html",
  styleUrls: ["./confirmation-modal.component.sass"]
})
export class ConfirmationModalComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  message: string;

  @Output()
  confirmAction: EventEmitter<any> = new EventEmitter();

  @Input()
  isVisible = false;

   @Output()
  isVisibleChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  closeModal(): void {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  confirm(): void {
    this.confirmAction.emit();
  }

  
}
