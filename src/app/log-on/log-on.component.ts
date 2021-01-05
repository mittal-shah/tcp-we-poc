import {Component, OnInit} from '@angular/core';
import {LogOnService} from './log-on.service';
import {EmployeeLogOnContext} from '../declarations/global';
import {MatSelectChange} from '@angular/material/select';

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
    this.service.getInfo().subscribe((result) => {
      if (result) {
        // @ts-ignore
        const [ObjCompanyConfig, ObjEmployeeLogOnConfig, ObjLogOnData] = result;
        this.context = {ObjCompanyConfig, ObjEmployeeLogOnConfig, ObjLogOnData} as EmployeeLogOnContext;
      }
    });
  }

  selectChangeHandler($event: MatSelectChange) {
    console.log($event.value);
  }
}
