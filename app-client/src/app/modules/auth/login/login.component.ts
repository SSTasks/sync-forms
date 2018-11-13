import { Component, OnInit } from '@angular/core';
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
  passwordType: string = 'password'
  passwordShow: boolean = false;
  active: boolean = false;
  message: any;

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
    })
  }

}
