# Nylas Webhooks

This simple express app is inspired from the example repo of
[nylas-nodejs/example/webhook](https://github.com/nylas/nylas-nodejs/tree/main/example/webhooks)
I made some changes as using syntax as async await, error handling using try catch, folder structures,
before we used to run server locally and now we are making
use of heroku to make it run in the cloud.

This app correctly responds to Nylas challenge request when you add a webhook
url to the [developer dashboard](https://developer.nylas.com). It also verifies
any webhook notification POST requests by Nylas. The aim of this repo is to be able to
create a callback URL for your Nylas application to log webhook notification using heroku app.

Make sure `node` and `npm` are installed on your computer.

# Initial setup

- Go to your local folder where you want to save this repo
- Clone this repo on your computer locally using the below command
- git clone git@github.com:nylas/webhooks-server.git 

- cd into the folder and run `npm install` to make sure all the necessay packages are installed.

- Get your Client Secret which you can find on you [developer dashboard](https://developer.nylas.com) app settings.
- <img width="386" alt="Screen Shot 2021-04-30 at 10 55 39" src="https://user-images.githubusercontent.com/22378963/116672579-a4d2b300-a9a2-11eb-99a5-372bbad9cfa4.png">

- Create `.env` file on the root directory of the repo and set your clientSecret as `nylasClientSecret = "your_client_secret";`

# Deploy to Heroku app.

- Create a heroku account here [Heroku signup](https://signup.heroku.com/login)
- Create a new app in your Heroku, set App name and choose your region.
- Go to heroku app settings click on `Reveal Config Vars` and set up your `nylasClientSecret`
-<img width="680" alt="Screen Shot 2021-04-30 at 13 18 38" src="https://user-images.githubusercontent.com/22378963/116688201-a4441780-a9b6-11eb-8163-cb583259848f.png">



- Go to your folder locally and install heroku CLI [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
- Login to heroku from your terminal with `Heroku login`
- Add heroku remote with `heroku git:remote -a your_heroku_app_name`
- Build using `git push heroku master`

- Finally you will get url as `https://your-heroku-app-name.herokuapp.com/`

- Go to your [developer dashboard](https://developer.nylas.com) and set your heroku url ending with /webhook as a Callback URL.
- Make sure you include /webhook in your callback Url example `https://your-heroku-app-name.herokuapp.com/webhook`

🎉 Now track all your webhooks from Nylas Dashboard 🎉
