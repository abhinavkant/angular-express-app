import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-app';
  message: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMessage().subscribe(resData => {
      this.message = resData;
    })
  }
}
