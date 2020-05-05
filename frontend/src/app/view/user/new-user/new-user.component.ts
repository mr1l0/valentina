import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { MatSnackBar, MatInput, ThemePalette, ProgressSpinnerMode } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  @ViewChild('password') passwordInput: MatInput;
  
  newUserForm: FormGroup;

  user: User = {};
  confirmedPassword: string = '';
  campoObrigatorioMin3: string = 'Campo obrigatório! Digite no mínimo 3 caracteres';
  phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  loading: boolean = false;

  userVerified: boolean = false;

  constructor(
    protected userService: UserService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {    
    
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    this.newUserForm = this.formBuilder.group({      

      'name': [this.user.name, [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(30)        
      ]],

      'email': [this.user.email, [
        Validators.pattern(emailregex)
      ]],

      'cellphone': [this.user.cellphone, [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(30)        
      ]],

      'login': [this.user.login, [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(30)        
      ]],      

      'password': [this.user.password, [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(30)        
      ]],

      'confirmedPassword': [this.confirmedPassword, [
        Validators.required
      ]]      

    });

  }

  verifyLogin(login: string) {    
    console.log(login);
    this.authService.vevrify(login).subscribe(result => this.userVerified = result);
    
  }

  submit(user: User) {

    this.loading = true;
    
    if(this.newUserForm.get('password').value !== this.newUserForm.get('confirmedPassword').value) {
      this._snackBar.open('Senha diferente da conferida. Favor corrigir a senha e tentar novamente!', '', { 
        duration: 7000,
        verticalPosition: 'top'
      });
      return this.passwordInput.focus();      
    }    
    
    this.user = user;
    this.user.type = 'Cliente';

    this.userService.upsertUser(this.user).subscribe(user => {
      this._snackBar.open('Usuário cadastrado com sucesso, entrando no sistema...', '', { 
        duration: 3000,
        verticalPosition: 'top'
      });      

      this.authService.auth(this.user, true).subscribe(user => this.router.navigate(["/home"]));
            
    }, 
    error => {
      console.log('Erro ao cadastrar usuário -> ' + error);
      this._snackBar.open('Tivemos um problema com seu cadastro de usuário, verifique sua internet e tente novamente', '', { 
        duration: 7000,
        verticalPosition: 'top'
      });      
      this.loading = false;
    });
  }

}
