import { Component, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ThemePalette, ProgressSpinnerMode, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @Output() logginDone = new EventEmitter();  

  user: User = {};
  saveUser: boolean = false;

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  loading: boolean;

  constructor(
    public authService: AuthService,
    protected userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,    
  ) { }

  ngOnInit() {

    this.createForm();

  }

  createForm() {    

    this.loginForm = this.formBuilder.group({      
      'password': [this.user.password, [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(30)        
      ]],

      'login': [this.user.login, [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(30)
      ]],

      'saveUser': [this.saveUser, []]

    });

  }

  submit(user: User) {    
    this.loading = true;
    this.user = user;
    this.authService.auth(this.user, this.loginForm.get('saveUser').value).subscribe(user => {           
      
      this.router.navigate(["/home"]);
      
    },
    error => {

      console.log('Erro ao authenticar usuário -> ' + error);
      this._snackBar.open('Tivemos um problema com a authenticação, verifique sua internet e tente novamente', '', { 
        duration: 7000,
        verticalPosition: 'top'
      });       

      this.loading = false;
    })
      
  }

}
