/* leny/toxitwitty
 *
 * /src/server/index.js - Server implementation of twitter timeline fetching
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

/* eslint-disable require-atomic-updates */

require("dotenv").config();

const Twitter = require("twitter-lite");
const Koa = require("koa");
const cors = require("@koa/cors");
const {parse} = require("qs");
const app = new Koa();
app.use(cors());

const {CONSUMER_KEY, CONSUMER_SECRET} = process.env;
const TWEETS_COUNT = 10;

app.use(async ctx => {
    const user = new Twitter({
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
    });

    const {access_token} = await user.getBearerToken();

    const twitter = new Twitter({bearer_token: access_token});

    const {nickname} = parse(ctx.request.querystring || "");

    if (!nickname) {
        ctx.throw(400);
        return;
    }

    const results = await twitter.get("statuses/user_timeline", {
        screen_name: nickname,
        count: TWEETS_COUNT,
    });

    ctx.body = results;
});

app.listen(3000);
