import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss']
})
export class GuitarComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  changeName(): void {
    this.dataService.name = 'Megumi';
  }

}
