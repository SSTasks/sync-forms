import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formCandidate: FormGroup;
  passwordType: string = 'password'
  passwordShow: boolean = false;
  active: boolean = false;
  message: any;
  checked = false;
  // user: object;

  constructor(private authService: AuthService, private router: Router, private alertService: AlertService) { }

  onSubmit() {
    let {username, password} = this.form.value;
    this.authService.login(username, password)
      .subscribe(
        data => {
          this.router.navigate(['/main']); 
        },
        error => {
          this.alertService.error(error);
          this.form.reset();
        }
      )
  }

  onSubmitCandidate() {
    let {username} = this.formCandidate.value;
    let user = {fullname: username, role: 'candidate'};
    this.authService.loginCandidate(user)
    this.router.navigate(['/main']);
  }

  onChange(event) {
    this.checked = event.checked;
    if(this.checked) {
      this.formCandidate.get('username').setValidators([Validators.required]);
      this.formCandidate.get('username').updateValueAndValidity();

      this.form.get('username').clearValidators();
      this.form.get('username').updateValueAndValidity();
      this.form.get('password').clearValidators();
      this.form.get('password').updateValueAndValidity();
    } else {
      this.form.get('username').setValidators([Validators.required]);
      this.form.get('username').updateValueAndValidity();
      this.form.get('password').setValidators([Validators.required]);
      this.form.get('password').updateValueAndValidity();

      this.formCandidate.get('username').clearValidators();
      this.formCandidate.get('username').updateValueAndValidity();
    }
  }

  togglePassword() {
    if(this.passwordShow){
      this.passwordType = 'password';
      this.passwordShow = false;
      this.active = false;
    } else {
      this.passwordType = 'text';
      this.passwordShow = true;
      this.active = true;
    }
  }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { 
      this.message = message; 
    });
    this.form = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
    this.formCandidate = new FormGroup({
      'username': new FormControl()
    })
  }

}
