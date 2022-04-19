# Angular Loading Library

## Getting Started
`NgxLoading` help you handle page loading, posting data to the server loading state and more others example of loading more easier.

- You have svg loaders integrated
- Loader handle with a service state

## Installation

 Use your favorite node package management
````console
npm i @ambroisebazie/ngx-loading or yarn add @ambroisebazie/ngx-loading
````

## Usage
- Add `NgxLoadingModule` inside `app.module.ts` imports arrays
````typescript
import {NgxLoadingModule} from '@ambroisebazie/ngx-loading'; 

@NgModule({
  // ..
  imports: [
    // ...
    NgxLoadingModule
    // ...
  ]
  // ...
})
export class AppModule {}
````

- Add `<ngx-loading></ngx-loading>` component inside `app.component.html`.

````html
  <ngx-loading></ngx-loading>
  <router-outlet></router-outlet>
````

> Example

- Handle the loader state inside `app.component.ts`

````typescript

//...
import { NgxLoadingService } from '@ambroisebazie/ngx-loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _loading: NgxLoadingService
    //...
  ) {

  }

  showLoader() {
    this._loading.show('Chargement en cours...', {vertical: 'center', horizontal: 'center'});
    setTimeout(() => this._loading.hide(), 5000);
  }
````

## Thank You !
