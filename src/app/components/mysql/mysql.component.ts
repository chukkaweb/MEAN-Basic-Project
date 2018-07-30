import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.component.html',
  styleUrls: ['./mysql.component.css']
})
export class MysqlComponent implements OnInit {
public result: any;
  constructor(private service: DashboardService) { }
  ngOnInit() {
    this.service.mysqlData().subscribe(res => {
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
