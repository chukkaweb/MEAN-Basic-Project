import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 public aboutTitle = 'Welcome To About Page';
  constructor() { }

  ngOnInit() {
  }

}
