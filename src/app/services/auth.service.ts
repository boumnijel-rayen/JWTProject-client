import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(data : any){
    return this.http.post('http://localhost:8000/newApp/login/', data);
  }

  register(data : any){
    return this.http.post('http://localhost:8000/newApp/register/', data);
  }

  getAllEmployees(token:any){
    const header = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.get('http://localhost:8000/newApp/employee', {headers: header});
  }

  deleteEmployee(id:any, token:any){
    const header = new HttpHeaders({'Authorization': 'Bearer ' + token});
    return this.http.delete('http://localhost:8000/newApp/employee/' + id, {headers: header});
  }

}
