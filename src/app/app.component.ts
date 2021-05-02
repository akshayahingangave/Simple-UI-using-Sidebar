import { Component } from '@angular/core';
interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [{
  type: 'danger',
  message: 'In this COVID19 situation we need to take care ourselves. STAY HOME, STAY SAFE.',
}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinic';

  alerts!: Alert[];

  

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
