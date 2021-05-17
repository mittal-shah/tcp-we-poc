import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[tcpMin]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TcpMinValidatorDirective, multi: true }],
})
export class TcpMinValidatorDirective implements Validator {
  @Input() tcpMin;

  validate(input) {
    return !this.tcpMin || input.value >= this.tcpMin ? null : { tcpMin: true };
  }
}
