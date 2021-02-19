import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
  }

  // logout
  logout() {
    this.configService.logout();
  }

}
