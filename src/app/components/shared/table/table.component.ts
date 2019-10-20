import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "wf-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.sass"]
})
export class TableComponent implements OnInit, OnChanges {
  @Input()
  tableHeader: string[];

  @Input()
  rows: any[];

  @Output()
  public action1: EventEmitter<any> = new EventEmitter();

  @Output()
  public action2: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['rows']){
      this.rows = changes.rows.currentValue;
    }
  }

  deleteElement(index: number): void {
  }

  executeFirstAction (index: number): void {
    this.action1.emit(index);
  }
  executeSecondAction (row: any): void {
    this.action2.emit(row.id);
  }
}
