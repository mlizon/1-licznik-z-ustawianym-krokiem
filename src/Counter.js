import { useEffect, useState } from 'react';
import ButtonsPanel from './components/ButtonsPanel';
import Display from './components/Display';
import Clock from './components/Clock';
import './Counter.css';
import Step from './components/Step';


const Counter = (props) => {
    const [counter, setCounter] = useState(props.counterInitValue);
    const [showClock, setShowClock] = useState(true);
    const [stepValue, setStepValue] = useState(1);

    const updateCounter = (action) => {
        if (action === "add") {
            setCounter(counter + stepValue);
        } else if (action === "reset") {
            setCounter(props.counterInitValue);
        } else {
            setCounter(0);
        }

    };

    const updateStep = (action) => {
        setStepValue(+action.target.value);
    }

    useEffect(()=>{
        // console.log('wywołanie use effecta');
    }, [])

    return (
        <div className="counter">
            <Display counter={counter} />
            <ButtonsPanel updateCounter={updateCounter} stepValue={stepValue}/>
            {showClock ? (
                <Clock setShowClock={setShowClock} />
            ) : (
                <p className="clockControl" onClick={() => setShowClock(true)}>Pokaż zegar</p>
            )}
            <Step updateStep={updateStep}/>
            </div>
    );
}

export default Counter;