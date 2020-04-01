/* leny/toxitwitty
 *
 * /src/client/components/twitter-tweet.js - TwitterTweet component
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

import React, {useCallback, useState} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {Card, Spinner, Button, Badge} from "react-bootstrap";
import useTextToxicity from "../core/use-text-toxicity";

const TwitterTweet = ({text}) => {
    const [launchAnalysis, setLaunchAnalysis] = useState(false);
    const [loading, predictions] = useTextToxicity(launchAnalysis && text);

    const handleLaunchAnalysis = useCallback(() => setLaunchAnalysis(true), [
        setLaunchAnalysis,
    ]);

    let $results;

    if (loading) {
        $results = (
            <div className={classnames("text-center", "mt-3")}>
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
                        {`This tweet is most likely to contains the following:`}
                        <br />
                        {matches.map(match => (
                            <Badge
                                variant={"danger"}
                                key={match}
                                className={"mr-1"}>
                                {match}
                            </Badge>
                        ))}
                    </small>
                </>
            );
        } else {
            $results = (
                <>
                    <hr />
                    <small>{"No results for this tweet."}</small>
                </>
            );
        }
    } else {
        $results = (
            <div className={classnames("text-right", "mt-3")}>
                <Button
                    variant={"info"}
                    size={"sm"}
                    onClick={handleLaunchAnalysis}>
                    {"Launch analysis"}
                </Button>
            </div>
        );
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
