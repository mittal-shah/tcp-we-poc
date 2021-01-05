import {Component, OnInit} from '@angular/core';
import {LogOnService} from './log-on.service';
import {MatSelectChange} from '@angular/material/select';
import {LogOnConfig, LogOnData} from '../declarations/global';

@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.scss']
})

export class LogOnComponent implements OnInit {
  config: LogOnConfig | undefined = undefined;
  data: LogOnData | undefined = undefined;

  constructor(private service: LogOnService) {
  }

  ngOnInit(): void {
    this.service.getInfo().subscribe((result) => {
      if (result) {
        this.config = result[0] as LogOnConfig;
        this.data = result[1] as LogOnData;
      }
    });
  }

  selectChangeHandler($event: MatSelectChange) {
    console.log($event.value);
  }
}
