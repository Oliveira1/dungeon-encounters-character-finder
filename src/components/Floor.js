import React, {Component} from "react";
import {getPossibleCombinations} from "../math/manhattanDistance";
import {Heading, Pane, Paragraph} from "evergreen-ui";


export const Floor = (value) => {
    console.log(value);
    let combinations = getPossibleCombinations(value.value);
    let subHeader = 'There are no floors to display';
    let currentFloor = -1;
    let currentCount = 0;
    let TopFloor = 0;
    let count = 0;
    console.log(combinations);
    combinations?.forEach(cs => {
        if (cs[0] != currentFloor) {
            if (currentCount >= count) {
                TopFloor = currentFloor<0?cs[0]:currentFloor;
                count = currentFloor<0?combinations.length:currentCount;
            }
            currentCount = 0;
            currentFloor = cs[0];
        }
        currentCount++;
    })
    let prob = count / combinations.length;
    console.log("statistics", prob);
    if (prob == 1) {
        subHeader = 'It is definitely on floor ' + TopFloor + ' !!!';
    } else if (prob >= 0.79) {
       subHeader = 'Almost sure it is on floor ' + TopFloor + ' .';
    } else if (prob >= 0.51) {
        subHeader = 'It might be on floor ' + TopFloor + ' ...';
    } else {
        subHeader = 'Try and input more combinations to get a better result';
    }
    let lines = [];
    const lineComponent = (line) => {
        return <Paragraph>Floor:{line[0]} Y:{line[1]} X:{line[2]}</Paragraph>
    };
    combinations.forEach(e => lines.push(lineComponent(e)));
    return (
        <Pane>
            <Heading>
                {subHeader}
            </Heading>
            {lines}
        </Pane>
    )
}