import './App.css';
import React from 'react';
import {Card, Pane, Button, TextareaField, majorScale, Heading} from 'evergreen-ui';
import {Floor} from '../src/components/Floor';
import {InputArea} from "./components/InputArea";

function App() {
    const [value, setValue] = React.useState('')
    const [coordinates, setCoordinates] = React.useState([])

    const getResult = (input) => {
        if (input) {
            setCoordinates(input);
        }
    }
    return (
        <Pane display={"flex"}>
            <InputArea setResult={getResult} />
            <Card elevation={0}>
                <Heading> Possible Floors and Coordinates</Heading>
                <Floor value={coordinates}/>
            </Card>
        </Pane>
    );
}

export default App;
