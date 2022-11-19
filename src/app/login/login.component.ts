import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: any;
  result: any;
  constructor(private builder : FormBuilder, private auth : AuthService, private router : Router) {
    this.myForm = this.builder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  connect(){
    this.auth.login(this.myForm.value).subscribe(
      (data) => {
        this.result = data;
        localStorage.setItem('token', this.result.JWT);
        this.router.navigate(['/employees']);
      }
    );
  }

}
