import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  dateToCheckActivation: string;

  @Output() selectedDate = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void { }

  OnDateChange(v): void {
    this.selectedDate.emit(v);
  }
}
