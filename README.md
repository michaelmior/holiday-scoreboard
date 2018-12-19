# Holiday Scoreboard

This is a simple scoreboard for anyone who might be running some games over the holidays.
Scores are fetched from a [restdb.io](https://restdb.io/) database and updated automatically.

Enjoy and happy holidays!

![Scoreboard demo animation](scoreboard.gif)

## Setup

1. Create a restdb.io account and create a new database
2. Go to your new database in the web interface and turn on developer mode by clicking the gears in the top right
3. Press the orange "Add Collection" button and create a collection named `scores`
4. Select your new "scores" collection and click "Add Field" to create fields named `team` and `score` (change the type of `score` to number)
5. Click Settings in the left menu and then select the API tab
6. Click "Add New" under "Web page API keys (CORS)"
7. Enter anything you like for the description
8. Check the box market `GET` under REST methods
9. Expand the "Real-time events" section and then in the textbox add "`POST:*`", "`PUT:*`", and "`DELETE:*`" pressing return after each one
10. Copy the provided API key and in a file `.env.local` in the same directory as this repository, add a line `REACT_APP_RESTDB_KEY=<api key here>`

## Launching

After completing the setup, you can now run the scoreboard.

    yarn start

Note that CORS is not correctly configured so if you want to access the scoreboard from any other machine, you'll have to do the following.
*This is dangerous* as it could potentially allow remote code execution so run at your own risk.

    DANGEROUSLY_DISABLE_HOST_CHECK=true yarn start

You can add/edit teams and scores from the restdb.io dashboard (it's rather mobile friendly).
You'll see new teams appear and when scores change, there's a nice animation where the team slides into its new position based on the score.

## Customizing

Since this was built as a one-off project, there's no settings which can be easily configured, but there are a few things you may want to change.
Replacing [`public/background.jpg`](public/background.jpg) will give you a new background image.
Changing the first number in `grid-template-rows` in [`Scoreboard.css`](src/Scoreboard.css) will allow you to change the number of rows in each column.
You can also edit the font size in the `.board` style and of course tweak anything else to your liking!
