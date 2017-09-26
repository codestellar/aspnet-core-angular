# Codestellar Dotnet Core 1.1 with Angular 2+ boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

## Development server

* Open Terminal 1 and run the following command

    * dotnet watch run

* Open Terminal 2 and run the following command

    * ng serve --proxy-config proxy.config.json

The proxy config will redirect the /api requests to api

## For production:

All you need is to deploy the Web Application as static files request is configured to redirect to index.html

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
