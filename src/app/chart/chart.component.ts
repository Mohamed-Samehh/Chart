import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartData: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.chartData = data.map((item: any) => ({
        to: new Date(item.to),
        'SERV.Instagram Post Picture Delay (msec)': item['SERV.Instagram Post Picture Delay (msec)']
      }));
    });
  }
}
