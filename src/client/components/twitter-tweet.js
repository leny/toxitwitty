/* leny/toxitwitty
 *
 * /src/client/components/twitter-tweet.js - TwitterTweet component
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

import React from "react";
import PropTypes from "prop-types";
import {Card} from "react-bootstrap";

const TwitterTweet = ({text}) => (
    <Card body className={"mb-3"}>
        {text}
    </Card>
);

TwitterTweet.propTypes = {
    text: PropTypes.string.isRequired,
};

export default TwitterTweet;
