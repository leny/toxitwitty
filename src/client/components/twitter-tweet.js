/* leny/toxitwitty
 *
 * /src/client/components/twitter-tweet.js - TwitterTweet component
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

import React from "react";
import PropTypes from "prop-types";
import {Card, Spinner} from "react-bootstrap";
import useTextToxicity from "../core/use-text-toxicity";

const TwitterTweet = ({text}) => {
    const [loading, predictions] = useTextToxicity(text);

    let $results;

    if (loading) {
        $results = (
            <div className={"text-center"}>
                <Spinner animation={"border"} />
            </div>
        );
    } else if (predictions.length) {
        const matches = [];

        predictions.forEach(({label, results}) => {
            if (results.some(({match}) => match)) {
                matches.push(label);
            }
        });

        if (matches.length) {
            $results = (
                <>
                    <hr />
                    <small>
                        {`This tweet is most likely to contains the following: ${matches.join(
                            ", ",
                        )}`}
                    </small>
                </>
            );
        }
    }

    return (
        <Card body className={"mb-3"}>
            {text}
            {$results}
        </Card>
    );
};

TwitterTweet.propTypes = {
    text: PropTypes.string.isRequired,
};

export default TwitterTweet;
