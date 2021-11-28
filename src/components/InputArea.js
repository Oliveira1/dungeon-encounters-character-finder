import {Button, Card, majorScale, TextareaField} from "evergreen-ui";
import React from "react";
import {convertToArray} from "../helper/converter";

export const InputArea = ({setResult}) =>{
    const [value, setValue] = React.useState('')
    const getResult = (value) => {
        let values = convertToArray(value);
        setResult(values);
    }
    let desc = "floor y x distance" + "\r\n" + "0 50 50 78" + "\r\n" + "10 21 76 110";

    return(
        <Card
            elevation={0}
            height={majorScale(50)}
            width={majorScale(50)}
            display={"inline-block"}>
            <TextareaField
                width={majorScale(30)}
                label="Enter coordinates as seen in game; floor y x distance."
                description="The more coordinates added the more accurate will be the location."
                placeholder={desc}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button marginRight={16} onClick={() => getResult(value)}>Calculate</Button>
        </Card>
    )
}