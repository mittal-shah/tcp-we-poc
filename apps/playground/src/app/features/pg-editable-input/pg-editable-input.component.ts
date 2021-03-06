import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  AnyType,
  MocksAppConfigs,
  MocksCompanyConfigs,
  MocksCustomFieldInputs,
  MocksDateInputs,
  MocksDecimalInputs,
  MocksDropdownInputs,
  MocksNumberInputs,
  MocksTextInputs,
} from '@tcp/tcp-models';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '@tcp/tcp-ng-ui';

@Component({
  selector: 'tcp-pg-editable-input',
  styleUrls: ['./pg-editable-input.component.scss'],
  templateUrl: './pg-editable-input.component.html',
})
export class PgEditableInputComponent implements OnInit {
  @ViewChild(NgForm) inputForm!: NgForm;

  mocksTextInputs = new MocksTextInputs();
  mocksNumberInputs = new MocksNumberInputs();
  mocksDecimalInputs = new MocksDecimalInputs();
  mocksDateInputs = new MocksDateInputs();
  mocksDropdownInputs = new MocksDropdownInputs();
  mocksCustomFieldInputs = new MocksCustomFieldInputs();
  type: string | undefined;

  constructor(private route: ActivatedRoute, private configService: ConfigService) {}

  ngOnInit() {
    this.type = String(this.route.snapshot.paramMap.get('type'));
    const mocksAppConfigs = new MocksAppConfigs();
    const mocksCompanyConfigs = new MocksCompanyConfigs();
    this.configService.setAppConfig(mocksAppConfigs.webclockAppConfig);
    this.configService.setCompanyConfig(mocksCompanyConfigs.webClockCompanyConfig);
  }

  showDetail(input: AnyType) {
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
