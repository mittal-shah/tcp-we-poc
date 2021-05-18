import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';
import { AnyType } from '@tcp/tcp-models';

@Directive({
  selector: '[tcpMin][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TcpMinValidatorDirective, multi: true }],
})
export class TcpMinValidatorDirective implements Validator {
  @Input() tcpMin: AnyType;

  validate(input: { value: AnyType }) {
    return !this.tcpMin || input.value >= this.tcpMin ? null : { tcpMin: true };
  }
}
