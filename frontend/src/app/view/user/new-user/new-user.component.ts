import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { MatSnackBar, MatInput } from '@angular/material';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  @ViewChild('password') passwordInput: MatInput;

  user: User = {};
  confirmedPassword: string = '';

  constructor(
    protected userService: UserService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.user.type = 'Cliente';
  }

  submit() {
    if(this.user.password !== this.confirmedPassword) {
      this._snackBar.open('Senha diferente da conferida. Favor corrigir a senha e tentar novamente!', '', { 
        duration: 5000,
        verticalPosition: 'top'
      });
      return this.passwordInput.focus();      
    }
    
    this.userService.upsertUser(this.user).subscribe(user => {
      alert('Usuário cadastrado, não esqueça de autenticar e logar automatico nesse ponto Murilão!');
    });

  }

}
