import { Component, OnInit, Input } from '@angular/core';
import { UserAdress } from 'src/app/model/user-adress';
import { Order } from 'src/app/model/order';
import { CepService } from 'src/app/services/cep.service';
import { UserAdressService } from 'src/app/services/user-adress.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-adress',
  templateUrl: './new-adress.component.html',
  styleUrls: ['./new-adress.component.scss']
})
export class NewAdressComponent implements OnInit {

  @Input() order: Order;
  @Input() userAdresses: UserAdress[];
  
  userAdress: UserAdress = {};

  constructor(
    protected userAdressService: UserAdressService,
    protected authService: AuthService,
    private cepService: CepService
  ) { }

  ngOnInit() {

  }

  setOrderAdress(userAdress: UserAdress) {
    this.order.userAdress = userAdress;       
  }

  findAdressByCep() {
    this.cepService.find(this.userAdress.cep).subscribe(cep => {
      this.userAdress.street = cep.logradouro;      
      this.userAdress.city = cep.localidade;
      this.userAdress.state = cep.uf;      
    });
  }

  submit() {
    if(!this.userAdress.user) {
      this.userAdress.user = this.authService.getLoggedUser();
    }
    this.userAdressService.upsert(this.userAdress).subscribe(userAdress => {
      //this.userAdress = userAdress;     
      this.setOrderAdress(userAdress);
    });
  }

}
