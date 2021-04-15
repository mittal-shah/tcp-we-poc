import {Component, OnInit} from '@angular/core';
import {LogOnService} from './log-on.service';
import {MatSelectChange} from '@angular/material/select';
import {CompanyConfig, EmployeeLogOnConfig, LogOnData} from '../declarations/global';

@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.scss']
})

export class LogOnComponent implements OnInit {
  config: EmployeeLogOnConfig | undefined = undefined;
  companyConfig: CompanyConfig | undefined = undefined;
  data: LogOnData | undefined = undefined;

  constructor(private service: LogOnService) {
  }

  ngOnInit(): void {
    this.service.getInfo().subscribe((result: any) => {
      if (result && result.length === 3) {
        this.config = result[0] as EmployeeLogOnConfig;
        this.companyConfig = result[1] as CompanyConfig;
        this.data = result[2] as LogOnData;
      }
    });
  }

  selectChangeHandler($event: MatSelectChange) {
    console.log($event.value);
  }
}
