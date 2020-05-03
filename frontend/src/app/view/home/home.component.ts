import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  newRequest() {
    return this.router.parseUrl("new-request");
  }

  myRequests() {
    return this.router.parseUrl("my-requests");
  }

}
