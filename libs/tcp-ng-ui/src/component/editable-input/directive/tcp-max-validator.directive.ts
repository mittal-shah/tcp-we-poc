import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';
import { AnyType } from '@tcp/tcp-models';

@Directive({
  selector: '[tcpMax][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TcpMaxValidatorDirective, multi: true }],
})
export class TcpMaxValidatorDirective implements Validator {
  @Input() tcpMax: AnyType;

  validate(input: { value: AnyType }) {
    return !this.tcpMax || input.value <= this.tcpMax ? null : { tcpMax: true };
  }
}
