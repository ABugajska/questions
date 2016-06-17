# questions - recruitment app

Tasks, which were accomplished due to the app can be found on [this repository](https://gist.github.com/venticco/6fc87eb8833cb66ab96f).
#### How to run the app?
* download the repository to Your computer
* in the first console window (```iTerm``` or whatever You use)  run ```npm install``` in the main app folder (You do not need to run ```bower install```, it's set to ```npm```)
  * when ```npm install``` is done, run ```npm run gulp watch```
* open another console
  * go to the questions/dist folder
  * run ```webpack-dev-server --history-api-fallback```
  
#### Build tool
Whole ```gulp``` environment was copied from the other project that I am also involved in. You can find it's repository [here](https://github.com/kucharskimaciej/lets-run). 
