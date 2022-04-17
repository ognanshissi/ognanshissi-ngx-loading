import { NgxLoadingService } from './../../projects/ngx-loading/src/lib/ngx-loading.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ognanshissi-nx-loading';

  constructor(
    private _loading: NgxLoadingService
  ) {

  }

  showLoader() {
    this._loading.show('Chargement en cours...', {vertical: 'center', horizontal: 'center'});
    setTimeout(() => this._loading.hide(), 5000);
  }

  showLoaderNoMessage() {
    this._loading.show(null, {vertical: 'center', horizontal: 'center'});
    setTimeout(() => this._loading.hide(), 5000);
  }

  showLoaderMessage() {
    this._loading.show('Loading...', {vertical: 'top', horizontal: 'right'});
    setTimeout(() => this._loading.hide(), 5000);
  }

  showLoaderBackDrop() {
    this._loading.show(null, {hasBackDrop: true, diameter: 100, vertical: 'center', horizontal: 'center'});
    setTimeout(() => this._loading.hide(), 5000);
  }
}
