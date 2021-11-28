import React, {Component} from "react";
import {getPossibleCombinations} from "../math/manhattanDistance";
import {Heading, Pane, Paragraph} from "evergreen-ui";
import {floorPrediction} from "../math/floorPrediction";


export const Floor = (value) => {
    console.log(value);
    let combinations = getPossibleCombinations(value.value);
    let subHeader = 'There are no floors to display';
    let fp = floorPrediction(combinations);
    console.log("statistics", fp.prediction);
    if (fp.prediction == 1) {
        subHeader = `It is definitely on floor ${fp.floor} !!!`;
    } else if (fp.prediction >= 0.79) {
        subHeader = `Almost sure it is on floor ${fp.floor} .`;
    } else if (fp.prediction >= 0.51) {
        subHeader = `It might be on floor ${fp.floor} ...`;
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
            <Heading is="h3">
                {subHeader}
            </Heading>
            {lines}
        </Pane>
    )
}