import {Component, OnInit} from '@angular/core';
import {LogOnService} from './log-on.service';
import {EmployeeLogOnContext} from '../declarations/global';

@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.scss']
})

export class LogOnComponent implements OnInit {
  context: EmployeeLogOnContext | undefined = undefined;

  constructor(private service: LogOnService) {
  }

  ngOnInit(): void {
    this.service.getInfo().subscribe((context) => {
      this.context = context;
    });
  }
}
