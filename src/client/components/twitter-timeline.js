/* leny/toxitwitty
 *
 * /src/client/components/twitter-timeline.js - TwitterTimeline Component
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

import React, {useCallback, useState} from "react";
import TwitterNickname from "./twitter-nickname";
import TwitterTweet from "./twitter-tweet";
import {Spinner} from "react-bootstrap";

import useTweets from "../core/use-tweets";

const TwitterTimeline = () => {
    const [nickname, setNickname] = useState(null);
    const [loading, tweets] = useTweets(nickname);

    const handleNickNameSelected = useCallback(setNickname, []);

    let $content;

    if (loading) {
        $content = (
            <div className={"text-center"}>
                <Spinner animation={"border"} />
            </div>
        );
    } else if (tweets.length) {
        $content = (
            <>
                <h2>{`Tweets from ${nickname}`}</h2>
                <ul className={"list-unstyled"}>
                    {tweets.map(({text, id_str}) => (
                        <TwitterTweet key={id_str} text={text} />
                    ))}
                </ul>
            </>
        );
    }

    return (
        <div>
            <TwitterNickname onNickNameSelected={handleNickNameSelected} />
            {$content}
        </div>
    );
};

export default TwitterTimeline;
