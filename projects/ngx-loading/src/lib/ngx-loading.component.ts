import { NgxLoadingService } from './ngx-loading.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-loading',
  templateUrl: './ngx-loading.component.html',
  styleUrls: ['./ngx-loading.component.scss']
})
export class NgxLoadingComponent implements OnInit {

  isLoading$!: Observable<boolean>;

  message!: string | null | undefined;

  constructor(
    public config: NgxLoadingService
  ) {
  }

  ngOnInit() {
    this.isLoading$ = this.config.loadingState$;
    this.config.message$.subscribe(message => {
      this.message = message;
    });
  }

  verticalClasses = () => {
    if (this.config.defaultConfig.vertical === 'top') {
      return ['items-start'];
    } else if (this.config.defaultConfig.vertical === 'center') {
      return ['items-center'];
    } else {
      return ['items-end'];
    }
  };

  horizontalClasses = () => {
    if (this.config.defaultConfig.horizontal === 'left') {
      return ['justify-start'];
    } else if (this.config.defaultConfig.horizontal === 'center') {
      return ['justify-center'];
    } else {
      return ['justify-end'];
    }
  };

  hasBackDrop = () => ['bg-black bg-opacity-50 items-start z-40'];

  getClasses(): string[] {
    let classes: string[] = [];
    if (this.config.defaultConfig.hasBackDrop) {
      classes = [...this.hasBackDrop()];
    }
    // verticalClasses
    classes = [...classes, ...this.verticalClasses()];
    // Horizontal classes
    classes = [...classes, ' ', ...this.horizontalClasses()];
    return classes;
  }

}
