# Holiday Scoreboard

## Setup

This is a simple scoreboard for anyone who might be running some games over the holidays.
Scores are fetched from a [restdb.io](https://restdb.io/) database and updated automatically.
To run it yourself, create a restdb.io account and create a new database.
Go to your new database in the web interface and turn on developer mode by clicking the gears in the top right.
Then press the orange "Add Collection" button and create a collection named "scores".
Select your new "scores" collection and click "Add Field" to create fields named "team" and "score" (change the type of "score" to number).

With this done, you can click the gears again to turn off developer mode.
The final step is to get an API key.
Click Settings in the left menu and then select the API tab.
Click "Add New" under "Web page API keys (CORS)".
Enter anything you like for the description then check the box market "GET" under REST methods.
Expand the "Real-time events" section and then in the textbox add "POST:*", "PUT:*", and "DELETE:*" pressing return after each one.
Once this is done, copy the provided API key and in a file `.env.local` in the same directory as this repository, add a line `REACT_APP_RESTDB_KEY=<api key here>`.

## Launching

After completing the setup, you can now run the scoreboard.

    yarn start

Note that CORS is not correctly configured so if you want to access the scoreboard from any other machine, you'll have to do the following.
*This is dangerous* as it could potentially allow remote code execution so run at your own risk.

    DANGEROUSLY_DISABLE_HOST_CHECK=true yarn start

You can add/edit teams and scores from the restdb.io dashboard (it's rather mobile friendly).
You'll see new teams appear and when scores change, there's a nice animation where the team slides into its new position based on the score.

Enjoy and happy holidays!
