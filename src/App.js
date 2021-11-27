import './App.css';
import React from 'react';
import {Card, Pane, Button, TextareaField, majorScale, Heading} from 'evergreen-ui';
import {Floor} from '../src/components/Floor';
import {convertToArray} from "./helper/converter";

function App() {
    const [value, setValue] = React.useState('')
    const [loles, setLoles] = React.useState([])

    let desc = "floor y x distance" + "\r\n" + "0 50 50 78" + "\r\n" + "10 21 76 110";
    let poo = false;
    const getResult = (value) => {
        let values = convertToArray(value);
        console.log(values);
        if (value) {
            setLoles(values);
        }
    }
    return (
        <Pane display={"flex"}>
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
                <Button marginRight={16} onClick={() => getResult(value)}>Default</Button>
            </Card>
            <Card elevation={0}>
                <Heading> Possible Floors and Coordinates</Heading>
                <Floor value={loles}/>
            </Card>
        </Pane>
    );
}

export default App;
