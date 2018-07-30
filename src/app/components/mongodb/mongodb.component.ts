import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.css']
})
export class MongodbComponent implements OnInit {
  public result: any;
  constructor(private service: DashboardService) { }
  ngOnInit() {
    this.service.mongodb().subscribe(res => {
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


