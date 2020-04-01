/* leny/toxitwitty
 *
 * /src/core/use-tweets.js - Custom hook to load tweets from an account
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

/* eslint-disable */ // WIP

import {useState, useEffect} from "react";
import Twitter from "twitter-lite";

const TWEETS_COUNT = 50;

export default nickname => {
    const [loading, setLoading] = useState(false);
    const [tweets, setTweets] = useState([]);
    const [app, setApp] = useState(null);

    useEffect(() => {
        const user = new Twitter({
            consumer_key: process.env.CONSUMER_KEY,
            consumer_secret: process.env.CONSUMER_SECRET,
        });

        user.getBearerToken().then(({access_token}) => {
            setApp(
                new Twitter({
                    bearer_token: access_token,
                }),
            );
        });
    }, []);

    useEffect(() => {
        if (app && nickname) {
            setLoading(true);
            app.get("statuses/user_timeline", {
                screen_name: nickname,
                count: TWEETS_COUNT,
            }).then(results => {
                setLoading(false);
                console.log("results:", results);
            });
        }
    }, [app, nickname]);

    return [loading, tweets];
};
