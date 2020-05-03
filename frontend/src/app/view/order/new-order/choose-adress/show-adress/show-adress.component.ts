import { Component, OnInit, Input } from '@angular/core';
import { UserAdress } from 'src/app/model/user-adress';

@Component({
  selector: 'app-show-adress',
  templateUrl: './show-adress.component.html',
  styleUrls: ['./show-adress.component.scss']
})
export class ShowAdressComponent implements OnInit {

  @Input() userAdress: UserAdress = {};

  constructor() { }

  ngOnInit() {
  }

}
