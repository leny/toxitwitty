/* leny/toxitwitty
 *
 * /src/components/twitter-timeline.js - TwitterTimeline Component
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

import React, {useCallback} from "react";

import TwitterNickname from "./twitter-nickname";

const TwitterTimeline = () => {
    const handleNickNameSelected = useCallback(nickname => {
        console.warn("I have a nickname: ", nickname);
        // TODO: call twitter API to get tweets from nickname
    }, []);

    return (
        <div>
            <TwitterNickname onNickNameSelected={handleNickNameSelected} />
        </div>
    );
};

export default TwitterTimeline;
