import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {
  public result: any;
  constructor(private service: DashboardService) { }
  ngOnInit() {
    this.service.staticFile().subscribe(res => {
      this.result = res;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('client side error');
      } else {
        console.log('server side error');
      }
    });
    }
  }
