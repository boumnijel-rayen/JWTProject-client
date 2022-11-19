import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees : any;
  token = localStorage.getItem('token');
  constructor(private auth : AuthService,private router : Router) { }

  ngOnInit(): void {
    this.auth.getAllEmployees(this.token).subscribe((data)=>{
      this.employees = data;
    })
  }

  deleteEmployee(id:any){
    this.auth.deleteEmployee(id, this.token).subscribe((data)=>{
      this.ngOnInit();
    })
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
