import { Component, HostListener, OnInit } from '@angular/core';
import { LoadingService } from '../../service';

@Component({
  selector: 'tcp-request-loading',
  templateUrl: './request-loading.component.html',
  styleUrls: ['./request-loading.component.scss'],
})
export class RequestLoadingComponent implements OnInit {
  isLoading = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.loading$.subscribe((isLoading) => (this.isLoading = isLoading));
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isLoading) {
      return;
    }
    event.returnValue = false;
    event.preventDefault();
  }
}
