/* leny/toxitwitty
 *
 * /src/client/core/use-text-toxicity.js - TensorflowJS Text Toxicity model hook
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

import {load} from "@tensorflow-models/toxicity";
import {useEffect, useState} from "react";

const THRESHOLD = 0.9;
let model;

load(THRESHOLD).then(mod => {
    model = mod;
});

export default text => {
    const [loading, setLoading] = useState(false);
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        if (model && text) {
            setLoading(true);

            model.classify([text]).then(results => {
                setLoading(false);
                setPredictions(results);
            });
        }
    }, [model, text]);

    return [loading, predictions];
};
