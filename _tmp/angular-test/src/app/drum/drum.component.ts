import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // because it's relative path

@Component({
  selector: 'app-drum',
  templateUrl: './drum.component.html',
  styleUrls: ['./drum.component.scss']
})
export class DrumComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
