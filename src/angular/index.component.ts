import { Component, ChangeDetectorRef, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import e from '../event-bus'

@Component({
  selector: 'AngularApp',
  templateUrl: "./src/angular/index.component.html",
  styleUrls: ["./src/angular/index.component.css"]
})
export default class AngularApp {
  message: string = "Message from React should appear here 😱"
  employeeList: any = [];

  constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef, @Inject(HttpClient) private httpClient: HttpClient) {
    this.httpClient.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").subscribe((data) => {
      this.employeeList = data;
    })
  }

  showEmployeeDetails(userName) {
    var employee = this.employeeList.filter((emp) => {
      return emp.name == userName
    })[0];

    e.emit('received', { employee: employee })
  }

  ngAfterContentInit() {
    e.on('message', message => {
      this.message = message.text
      this.changeDetector.detectChanges()
      this.returnMessageToReactWhenReceived()
    })
  }

  returnMessageToReactWhenReceived() {
    e.emit('received', { text: 'Woohoo! Hello from Angular! 🎉' })
  }
}
