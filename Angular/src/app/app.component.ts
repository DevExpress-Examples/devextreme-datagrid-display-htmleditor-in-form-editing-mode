import { Component } from '@angular/core';
import { Service, Employee } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  title = 'Angular';
  dataSource: Employee[];

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
    }
}
