import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: any;
  posted: boolean = false;
  constructor(private builder : FormBuilder, private auth : AuthService, private router : Router) { 
    this.myForm = this.builder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.maxLength(8), Validators.minLength(8)]],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  register(){
    this.auth.register(this.myForm.value).subscribe(
      (data) => {
        this.posted = true;
        this.myForm.reset();
      }
    );
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

}
