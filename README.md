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
