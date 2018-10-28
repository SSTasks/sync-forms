import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Message } from 'src/app/models/message.model';


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
  message: Message;

  constructor(private authService: HttpService, private router: Router) { }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = ''
    }, 5000)
  }

  onSubmit() {
    let {username, password} = this.form.value;
    this.authService.login(username, password)
      .subscribe(data => {
        if(data) {
          this.router.navigate(['/']);
        } 
        // else {
        //   this.showMessage({
        //     text: 'Wrong input data',
        //     type: 'danger'
        //   })
        // }
      })
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
    this.form = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    })
  }

}
