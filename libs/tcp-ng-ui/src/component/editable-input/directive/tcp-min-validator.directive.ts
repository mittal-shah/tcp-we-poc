import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';
import { AnyType } from '@tcp/tcp-models';

@Directive({
  providers: [{ multi: true, provide: NG_VALIDATORS, useExisting: TcpMinValidatorDirective }],
  selector: '[tcpMin][ngModel]',
})
export class TcpMinValidatorDirective implements Validator {
  @Input() tcpMin: AnyType;

  validate(input: { value: AnyType }) {
    return !this.tcpMin || input.value >= this.tcpMin ? null : { tcpMin: true };
  }
}
