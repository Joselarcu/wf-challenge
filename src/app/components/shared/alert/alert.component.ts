import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: "wf-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.sass"]
})
export class AlertComponent implements OnInit, OnChanges {
  @Input()
  message: string;

  @Input()
  type: string; /* error or success */

  @Input()
  visibleMessage: boolean;

  @Output()
  visibleMessageChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.close();
    }, 3000);
  }

  close(): void {
    this.visibleMessage = false;
    this.visibleMessageChange.emit(this.visibleMessage);
  }
}
