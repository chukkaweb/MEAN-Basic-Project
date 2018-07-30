import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private status: any;
  constructor(private service: LoginService, private router: Router) { }
public login(arg1): any {
  this.service.authenticate(arg1).subscribe(res => {
    if (res.login === 'success') {
    window.localStorage.setItem('login_details', JSON.stringify(res));
    this.router.navigate(['/dashboard/home']);
    } else {
      alert('Login Fail');
    }
  }, (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log('client side error');
    } else {
      console.log('server side error');
    }
  });
}
  ngOnInit() {
  }

}
