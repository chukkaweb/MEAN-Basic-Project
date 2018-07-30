import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor( private router: Router) { }
  ngOnInit() {
  }
  public logout() {
window.localStorage.removeItem('login_details');
this.router.navigate(['/']);
  }
}
