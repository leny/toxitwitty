/* leny/toxitwitty
 *
 * /src/client/core/use-tweets.js - Custom hook to load tweets from an account
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

import {useState, useEffect} from "react";
import axios from "axios";

const SERVER_ENDPOINT = "http://localhost:3000";

export default nickname => {
    const [loading, setLoading] = useState(false);
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        if (nickname) {
            setLoading(true);
            axios
                .get(`${SERVER_ENDPOINT}?nickname=${nickname}`, {cors: true})
                .then(({data}) => {
                    setLoading(false);
                    setTweets(data);
                });
        }
    }, [nickname]);

    return [loading, tweets];
};
