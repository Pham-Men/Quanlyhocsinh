import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    name: new FormControl(''),
    pass: new FormControl ('')
  })

  onSubmit() {
    console.log(this.loginForm)
    console.log(this.loginForm.controls.name.value)
    console.log(this.loginForm.controls.pass.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
