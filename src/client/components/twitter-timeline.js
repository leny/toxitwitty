/* leny/toxitwitty
 *
 * /src/client/components/twitter-timeline.js - TwitterTimeline Component
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

import React, {useCallback, useState} from "react";
import TwitterNickname from "./twitter-nickname";

import useTweets from "../core/use-tweets";

const TwitterTimeline = () => {
    const [nickname, setNickname] = useState(null);
    const [loading, tweets] = useTweets(nickname);

    console.log({loading, tweets});

    const handleNickNameSelected = useCallback(setNickname, []);

    return (
        <div>
            <TwitterNickname onNickNameSelected={handleNickNameSelected} />
        </div>
    );
};

export default TwitterTimeline;
