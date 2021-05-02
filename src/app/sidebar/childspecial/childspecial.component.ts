import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-childspecial',
  templateUrl: './childspecial.component.html',
  styleUrls: ['./childspecial.component.css']
})
export class ChildspecialComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number; } | undefined;

  constructor(private calendar: NgbCalendar) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  time = { hour: 13, minute: 30 };
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  showAlert() {
    alert('Appointment Fixed.')
  }

  show = true;

  close() {
    this.show = false;
    setTimeout(() => this.show = true, 3000);
  }

}
