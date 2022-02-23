import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project';
  PersonalDetails: boolean = true;
  CompanyDetails: boolean = false;
  genderVal:any = 'male';
}
