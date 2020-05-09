import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('caiu aqui pai');
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
        this.outlet.deactivate();
    });    
  }
  
  newRequest() {
    return this.router.parseUrl("new-request");
  }

  myRequests() {
    return this.router.parseUrl("my-requests");
  }

}
