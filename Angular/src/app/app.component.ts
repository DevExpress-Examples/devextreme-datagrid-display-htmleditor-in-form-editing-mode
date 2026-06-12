import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxHtmlEditorModule } from 'devextreme-angular/ui/html-editor';
import { Employee, Service } from './app.service';

@Component({
    selector: 'app-root',
    imports: [DxDataGridModule, DxHtmlEditorModule],
    providers: [Service],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource: Employee[];

  htmlEditorOptions = {
    height: 190,
    toolbar: {
      items: ['bold', 'italic', 'underline'],
    },
  };

  constructor(service: Service) {
    this.dataSource = service.getEmployees();
  }
}
