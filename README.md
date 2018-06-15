# VinciNgMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## multi-panels
```
import MultiPanelsModule in your module;
```
### Expample
```html
<vinci-multi-panels [width]="'370px'">
  <vinci-multi-panels-item [iconClass]="'fa fa-home'" [code]="'home'" [title]="'home_title'" [class]="'home'">
    <h1>HOME</h1>
  </vinci-multi-panels-item>
  <vinci-multi-panels-item [iconClass]="'fa fa-info'" [code]="'info'" [title]="'info_title'" [class]="'info'">
    <h1>INFO</h1>
  </vinci-multi-panels-item>
</vinci-multi-panels>
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
