import { Component, OnInit } from '@angular/core';
import { LoginDto, listUser } from '../model/loginDto';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loginData: LoginDto = {
    username: '',
    password: '',
  };

  usernameHasSpaces = false;
  passwordHasSpaces = false;
  usernameEmpty = false;
  passwordEmpty = false;

  constructor(private router: Router, private messageService: MessageService) {}

  login() {
    this.usernameHasSpaces = this.loginData.username.includes(' ');
    this.usernameEmpty = this.loginData.username.trim() === '';
    this.passwordEmpty = this.loginData.password.trim() === '';

    // if (this.usernameHasSpaces || this.usernameEmpty || this.passwordEmpty) {
    //   this.messageService.add({ severity: 'error', summary: 'Login Error', detail: 'Please enter a valid username and password.' });
    //   return;
    // }

    const user = listUser.find((user) => user.username === this.loginData.username && user.password === this.loginData.password);
    if (user) {
      this.router.navigate(['/home']);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Login Error', detail: 'Invalid username or password. Please try again.' });
    }
  }
  }
