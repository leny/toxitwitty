/* leny/toxitwitty
 *
 * /src/components/twitter-nickname.js - TwitterNickname component
 *
 * coded by leny@flatLand!
 * started at 01/04/2020
 */

import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";
import {Form} from "react-bootstrap";

const {Group, Label, Control} = Form;

const TwitterNickName = ({onNickNameSelected}) => {
    const [nickname, setNickname] = useState("");

    const handleControlChange = useCallback(e => setNickname(e.target.value), [
        setNickname,
    ]);

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();

            onNickNameSelected && nickname && onNickNameSelected(nickname);
        },
        [nickname, onNickNameSelected],
    );

    return (
        <form action={"#"} onSubmit={handleSubmit}>
            <Group controlId={"nickname"}>
                <Label>{"Twitter nickname:"}</Label>
                <Control
                    type={"text"}
                    placeholder={"Enter a @twitter_nickname"}
                    onChange={handleControlChange}
                />
            </Group>
        </form>
    );
};

TwitterNickName.propTypes = {
    onNickNameSelected: PropTypes.func,
};

export default TwitterNickName;
