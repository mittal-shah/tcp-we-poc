import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  EditableInputModel,
  MocksAppConfigs,
  MocksCompanyConfigs,
  MocksDateInputs,
  MocksDecimalInputs,
  MocksNumberInputs,
  MocksTextInputs,
} from '@tcp/tcp-models';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '@tcp/tcp-ng-ui';

@Component({
  selector: 'tcp-pg-editable-input',
  templateUrl: './pg-editable-input.component.html',
  styleUrls: ['./pg-editable-input.component.scss'],
})
export class PgEditableInputComponent implements OnInit {
  @ViewChild(NgForm) inputForm!: NgForm;

  mocksTextInputs = new MocksTextInputs();
  mocksNumberInputs = new MocksNumberInputs();
  mocksDecimalInputs = new MocksDecimalInputs();
  mocksDateInputs = new MocksDateInputs();
  type: string;

  constructor(private route: ActivatedRoute, private configService: ConfigService) {}

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    const mocksAppConfigs = new MocksAppConfigs();
    const mocksCompanyConfigs = new MocksCompanyConfigs();
    this.configService.setAppConfig(mocksAppConfigs.webclockAppConfig);
    this.configService.setCompanyConfig(mocksCompanyConfigs.webClockCompanyConfig);
  }

  showDetail(input: EditableInputModel) {
    return console.log(input);
  }

  submitForm() {
    if (!this.inputForm.valid) {
      alert('invalid form');
    } else {
      alert('valid form');
    }
  }
}
