/* leny/toxitwitty
 *
 * /src/components/root.js - Root Component
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import TwitterTimeline from "./twitter-timeline";

const RootComponent = () => (
    <Container className={"mt-3"}>
        <Row>
            <Col sm={{span: 4, offset: 4}}>
                <h1>{"Toxitwitty"}</h1>

                <TwitterTimeline />
            </Col>
        </Row>
    </Container>
);

export default RootComponent;
