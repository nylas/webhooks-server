# Nylas Webhooks

This simple express app is inspired from the example repo of
[nylas-nodejs/example/webhook](https://github.com/nylas/nylas-nodejs/tree/main/example/webhooks)
I made some changes as using async await syntax, error handling using try catch, folder structures,
before we used to run server locally and now we are making
use of heroku to make it run in the cloud (Heroku).

This app correctly responds to Nylas challenge request when you add a webhook
url to the [developer dashboard](https://developer.nylas.com). It also verifies
any webhook notification POST requests by Nylas. The aim of this repo is to be able to
create a callback URL for your Nylas application to log webhook notification using heroku app.

Make sure `node` and `npm` are installed on your computer.

## Initial setup

- Go to your local folder where you want to save this repo
- Clone this repo on your computer locally using the below command
- git clone git@github.com:nylas/webhooks-server.git

- Get your Client Secret which you can find on you [developer dashboard](https://developer.nylas.com) app settings you will need it later.
- <img width="386" alt="Screen Shot 2021-04-30 at 10 55 39" src="https://user-images.githubusercontent.com/22378963/116672579-a4d2b300-a9a2-11eb-99a5-372bbad9cfa4.png">

## Deploy to Heroku app.

- Create a heroku account here [Heroku signup](https://signup.heroku.com/login) if you don't have one.
- Create a new app in your Heroku, set App name and choose your region.
- Go to heroku app settings click on `Reveal Config Vars` and set up your `NYLAS_CLIENT_SECRET`
- <img width="680" alt="Screen Shot 2021-04-30 at 13 18 38" src="https://user-images.githubusercontent.com/22378963/116688201-a4441780-a9b6-11eb-8163-cb583259848f.png">

- Go to your folder locally and install heroku CLI [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
- Login to heroku from your terminal with `heroku login`
- Add heroku remote with `heroku git:remote -a your-heroku-app-name`, make sure you are running the command from `webhooks-server` folder locally.
- Build using `git push heroku master`

- You will see url as `https://your-heroku-app-name.herokuapp.com/` copy it.

- Go to your [developer dashboard](https://developer.nylas.com) and set your heroku url ending with /webhook as a Callback URL.
- Make sure you include /webhook in your callback Url example `https://your-heroku-app-name.herokuapp.com/webhook`

🎉 Now track all your webhooks from Nylas Dashboard Webhook logs 🎉

## Extras

- If you want to see your deltas object go to WebhookLogs/router.js on line 29 uncomment them, you can also add you own logic if you want.
- Add the changes using `git add .`
- Commit them `git commit -m "Logging deltas object"`
- Build using `git push heroku master`

Now you will be able to see the deltas object locally using the `heroku logs --tail`
