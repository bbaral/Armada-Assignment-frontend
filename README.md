# GroceryListApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

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

### Environment setup to run the application
***
1. Install Angular CLI from [Angular Official Website](https://cli.angular.io/)
2. This application use mongoDB for storing and fetching data. Therefore you gonna want to install MongoDB as well from [MongoDB Official Website](https://docs.mongodb.com/v3.2/administration/install-community/).
3. Once you download MongoDB. Go ahead and create DB call **groceryApp** (camelcase matters) and then create Collection with a name _groceryList_
4. Once you done setting up first 3 Clone this repo via terminal or CMD and run ```npm install``` in that download repo directory.
5. Lastly run ```ng serve``` and navigate to ```http://localhost:4200```
6. After doing first 5 steps. Go ahead and clone [Backend Spring boot rep](https://github.com/bbaral/Armada-Assignment-backend). Navigate to downloaded folder and run ```gradle install``` via terminal or CMD and after finish installing again run ```gradle build```. 
6. You should see message ```BUILD SUCCESSFUL```. After that run ```./gradlew bootRun```. if everything goes well, you should see UI like below


![Image of grocerylistApp](https://github.com/bbaral/Armada-Assignment-frontend/blob/master/src/assets/Screen%20Shot%202019-11-19%20at%209.42.48%20PM.png)
