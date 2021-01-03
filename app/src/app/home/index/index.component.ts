import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  items = [1,2,3,4,5, 6, 7, 8, 9]
  ngOnInit(): void {
  }

}
